// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTMarket is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold;

    address payable owner;
    uint256 listingPrice = 0.025 ether;

    constructor() {
        owner = payable(msg.sender);
    }

    struct Bid {
     address bidder;
     uint256 amount;   
    }

    struct MarketItem {
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        uint256 endTime;
        bool sold;
        Bid highestBid;
    }

    struct Collection {
        string name;
        uint256[] tokenIds;
    }

    mapping (uint256 => MarketItem) private idToMarketItem;
    mapping (address => Collection[]) private _collections;

    event MarketItemCreated (
        uint256 itemId,
        address nftContract,
        uint256 tokenId,
        address seller,
        address owner,
        uint256 price,
        uint256 endTime,
        bool sold,
        Bid highestBid
    );

    function getListingPrice() public view returns (uint256){
        return listingPrice;
    }

    function placeBid(uint256 itemId, uint256 bidAmount) public payable nonReentrant{
        require(!idToMarketItem[itemId].sold, "Token already sold");
        require(msg.value == bidAmount, "Sent ETH does not match bid amount");
    
        Bid memory currentHighestBid = idToMarketItem[itemId].highestBid;
        require(bidAmount > currentHighestBid.amount, "Place a higher bid");
    
        if (currentHighestBid.bidder != address(0)){
            payable(currentHighestBid.bidder).transfer(currentHighestBid.amount);
        }

        idToMarketItem[itemId].highestBid = Bid({
            bidder: msg.sender,
            amount: bidAmount
        });
    }

    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price,
        uint256 duration
    ) public payable nonReentrant {
        require(price > 0, "Price must be at least 1 wei");
        require(msg.value == listingPrice, "Price must be equal to listing price");

        _itemIds.increment();
        uint256 itemId = _itemIds.current();

        uint256 endTime = block.timestamp + duration;

        idToMarketItem[itemId] = MarketItem({
            itemId:itemId, 
            nftContract: nftContract,
            tokenId: tokenId,
            seller: payable(msg.sender),
            owner: payable(address(0)),
            price: price,
            endTime: endTime,
            sold: false, 
            highestBid: Bid({
                bidder: address(0),
                amount: 0
            })
    });

        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);
    
        emit MarketItemCreated(
            itemId,
            nftContract,
            tokenId,
            msg.sender,
            address(0),
            price,
            endTime,
            false,
            Bid({
                bidder: address(0),
                amount: 0
            })
        );
   
    }

    function createMarketSale(
        address nftContract,
        uint256 itemId
    ) public payable nonReentrant {
        uint price = idToMarketItem[itemId].price;
        uint256 tokenId = idToMarketItem[itemId].tokenId;

        require(msg.value == price, "Please submit the asking price in order to complete the purchase");

        idToMarketItem[itemId].seller.transfer(msg.value);
        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);

        idToMarketItem[itemId].sold = true;
        idToMarketItem[itemId].owner = payable(msg.sender);
        _itemsSold.increment();
        payable(owner).transfer(listingPrice);
    }

    // create collection
    function createCollection(address nftContract,uint256[] memory tokenIds, string memory collectionName) public {
        for (uint256 i = 0; i < tokenIds.length; i++){
            require(IERC721(nftContract).ownerOf(tokenIds[i]) == msg.sender, "Only token owner can add the token to collection");

            uint256 collectionIndex = _collections[msg.sender].length;
            _collections[msg.sender].push(Collection({
                name: "",
                tokenIds: new uint256[](0)
            }));

            _collections[msg.sender][collectionIndex].name = collectionName;
            _collections[msg.sender][collectionIndex].tokenIds.push(tokenIds[i]);
           
        }
    }

    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint itemCount = _itemIds.current();
        uint unsoldItemCount = _itemIds.current() - _itemsSold.current();
        uint currentIndex = 0;

        MarketItem [] memory items = new MarketItem[](unsoldItemCount);

        for (uint i = 0; i < itemCount; i++) {
            if (idToMarketItem[i + 1].owner == address(0)) {
                uint currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        
        return items;
    }

    function fetchMyNFTs() public view returns (MarketItem[] memory) {
        uint totalItemCount = _itemIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }
        
        MarketItem [] memory items = new MarketItem[](itemCount);
        for (uint i = 0; i < totalItemCount; i++){
            if (idToMarketItem[i + 1].owner == msg.sender){
                uint currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }

    function fetchItemsCreated() public view returns (MarketItem[] memory) {
        uint totalItemCount = _itemIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for (uint i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }
        
        MarketItem [] memory items = new MarketItem[](itemCount);
        for (uint i = 0; i < totalItemCount; i++){
            if (idToMarketItem[i + 1].seller == msg.sender){
                uint currentId = idToMarketItem[i + 1].itemId;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }

    function fetchMyCollections () public view returns (Collection[] memory){
        return _collections[msg.sender];
    }

    function fetchCollections(address user) public view returns (Collection[] memory) {
        return _collections[user];
    }

}