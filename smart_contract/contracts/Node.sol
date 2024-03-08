pragma solidity ^0.8.0;

contract Node {
    uint256 NumberofNodes=0;

    event SetupNode(address WalletAddress, string Name, string PlantAdress,string Lat,string Long,uint256 Revenue,uint256 NumberofSolarPannels,string desc,uint256 timestamp);
    event UpdateRevenue(uint Index);

    struct NodeStruct {

        address WalletAddress;
        string Name;
        string PlantAdress;
        string Lat ;
        string Long ;
        uint256 Revenue;
        uint256 NumberofSolarPannels;
        string desc;
        uint256 CarbonFootPrint;
        uint256 timestamp;

    }


    NodeStruct[] Nodes;

    

    function addVal(address payable WalletAddress, string memory Name, string memory PlantAdress,string memory Lat,string memory Long,uint256 Revenue,uint256 NumberofSolarPannels,string memory desc, uint256 CarbonFootPrint) public {
        Nodes.push(NodeStruct( WalletAddress,
        Name,
        PlantAdress,
        Lat ,
        Long ,
        Revenue,
        NumberofSolarPannels,
        desc,
        CarbonFootPrint,
        block.timestamp));

        emit SetupNode(WalletAddress, Name, PlantAdress, Lat, Long, Revenue, NumberofSolarPannels, desc, block.timestamp);
        
    }

    function updateRevenue(address payable WalletAddress, string memory Name, string memory PlantAdress,string memory Lat,string memory Long, uint256 Revenue, uint256 NumberofSolarPannels, string memory desc,uint256 CarbonFootPrint, uint Index) public {
        Nodes.push(NodeStruct(WalletAddress,
        Name,
        PlantAdress,
        Lat ,
        Long ,
        Nodes[Index].Revenue + Revenue,
        NumberofSolarPannels,
        desc,CarbonFootPrint,block.timestamp));
        Nodes[Index] = Nodes[Nodes.length -1];
        Nodes.pop();
        emit UpdateRevenue(Index);
    }

    function updateCarbonFootPrint(address payable WalletAddress, string memory Name, string memory PlantAdress,string memory Lat,string memory Long, uint256 Revenue, uint256 NumberofSolarPannels, string memory desc,uint256 CarbonFootPrint, uint Index) public {
        Nodes.push(NodeStruct(WalletAddress,
        Name,
        PlantAdress,
        Lat ,
        Long ,
        Revenue,
        NumberofSolarPannels,
        desc,((Nodes[Index].CarbonFootPrint) + CarbonFootPrint) / 2,block.timestamp));
        Nodes[Index] = Nodes[Nodes.length -1];
        Nodes.pop();
        emit UpdateRevenue(Index);
    }

    
    function getAll() public view returns (NodeStruct[] memory){
        return Nodes;
        
    }
    function getCount() public view returns (uint256){
        return NumberofNodes;
    }

}