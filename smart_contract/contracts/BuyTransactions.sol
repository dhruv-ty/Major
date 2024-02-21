pragma solidity ^0.8.0;

contract BuyTransactions {
    uint256 NumberofTransactions=0;

    event TransferEnergy(address BuyerAddress, address SellerAddress, string SellerName, string SellerPlantAdress,string SellerLat,string SellerLong,uint256 Units,uint256 PricePerUnit,uint256 TotalPrice,uint256 timestamp);
    
    
    struct EnergyStruct {

        address BuyerAddress;
        address SellerAddress;
        string SellerName;
        string SellerPlantAdress;
        string SellerLat ;
        string SellerLong ;
        uint256 Units ;
        uint256 PricePerUnit;
        uint256 TotalPrice;
        uint256 timestamp;

    }


    EnergyStruct[] Energy;

    function addVal(address payable SellerAddress,string memory SellerName, string memory SellerPlantAddress, string memory SellerLat,string memory SellerLong, 
    uint256 Units,uint256 PricePerUnit,uint256 TotalPrice) public {
        NumberofTransactions +=1;
        Energy.push(EnergyStruct(msg.sender,SellerAddress,SellerName,SellerPlantAddress,SellerLat,SellerLong,Units,PricePerUnit,TotalPrice,block.timestamp));

        emit TransferEnergy(msg.sender,SellerAddress,SellerName,SellerPlantAddress,SellerLat,SellerLong,Units,PricePerUnit,TotalPrice,block.timestamp);

    }
    function getAll() public view returns (EnergyStruct[] memory){
        return Energy;
        
    }
    function getCount() public view returns (uint256){
        return NumberofTransactions;
    }

}