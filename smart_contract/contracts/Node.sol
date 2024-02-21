pragma solidity ^0.8.0;

contract Node {
    uint256 NumberofNodes=2;

    event SetupNode(address SenderAddress, string SenderName, string PlantAdress,string Lat,string Long,uint256 Units,uint256 PricePerUnit,string desc,uint256 timestamp);
    
    
    struct NodeStruct {

        address WalletAddress;
        string Name;
        string PlantAdress;
        string Lat ;
        string Long ;
        uint256 Revenue;
        uint256 NumberofSolarPannels;
        string desc;
        uint256 timestamp;

    }


    NodeStruct[] Nodes;

    

    function addVal() public {
        Nodes.push(NodeStruct(0x6904a7e5497e8270Afd9F9ee46321a9b0A75DB5A,"Ramesh Swammy","J-156, BLock 2, Ramanagar, Karnataka",'15.6572','13.5671',245000,10,"Hello, you will get Cheap Energy Here",block.timestamp));
        
    }
    function getAll() public view returns (NodeStruct[] memory){
        return Nodes;
        
    }
    function getCount() public view returns (uint256){
        return NumberofNodes;
    }

}