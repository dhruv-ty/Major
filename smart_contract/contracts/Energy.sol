pragma solidity ^0.8.0;

contract Energy {
    uint256 NumberofTransactions=0;

    event TransferEnergy(address SenderAddress, string SenderName, string PlantAdress,string Lat,string Long,uint256 Units,uint256 PricePerUnit,string desc,uint256 timestamp);
    
    
    struct EnergyStruct {

        address SenderAddress;
        string SenderName;
        string PlantAdress;
        string Lat ;
        string Long ;
        uint256 Units ;
        uint256 PricePerUnit;
        string desc;
        uint256 timestamp;

    }


    EnergyStruct[] Energy;

    function addVal(string memory SenderName, string memory PlantAddress, string memory Lat,string memory Long, 
    uint256 Units,uint256 PricePerUnit,string memory desc) public {
        NumberofTransactions +=1;
        Energy.push(EnergyStruct(msg.sender,SenderName,PlantAddress,Lat,Long,Units,PricePerUnit,desc,block.timestamp));

        emit TransferEnergy(msg.sender,SenderName,PlantAddress,Lat,Long,Units,PricePerUnit,desc,block.timestamp);

    }
    function getAll() public view returns (EnergyStruct[] memory){
        return Energy;
        
    }
    function getCount() public view returns (uint256){
        return NumberofTransactions;
    }

}