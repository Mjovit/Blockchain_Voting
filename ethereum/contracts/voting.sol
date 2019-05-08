pragma solidity ^0.4.17;

contract Voting{
    address public manager;
    mapping(address => bool) public players;
    
    function Voting() public{
        manager = msg.sender;
    }
    
     
    event AddedCandidate(uint candidateID); 
    
    modifier restricted {
        require(msg.sender == manager);
        _;
    }
    
    modifier limit {
        require(!players[msg.sender]);
        _;
    }
    
    struct voter{
        //uint weighted;
        string uid;
        uint candidateIDvote;
        bool voted;
        
    }
    
    struct candidate{
        string name;
        string party;
        uint totalvotes;
        bool doesExist;
        
    }
    
    uint public numcandidates;
    uint public numvoters;
    
    mapping (uint => candidate)public candidates;
    mapping (uint => voter)public voters;
    
    function addCandidate(string name, string party) restricted public {
        uint candidateID =numcandidates++;
        uint totalvotes = totalVotes(candidateID);
         candidates[candidateID] = candidate(name,party,totalvotes,true);
         AddedCandidate(candidateID);
         
    }
    function vote(string uid, uint candidateID) limit public {
        
            if(candidates[candidateID].doesExist == true) {
                       uint voterID = numvoters++;
                       voters[voterID] = voter(uid,candidateID, true);
                       players[msg.sender] = true;
                
            }
        candidates[candidateID].totalvotes = totalVotes(candidateID);
            
        }
    
    
    function totalVotes(uint candidateID) view public returns (uint) {
        uint numOfVotes = 0;
        for (uint i = 0; i < numvoters; i++) {
            if (voters[i].candidateIDvote == candidateID) {
                numOfVotes++;
            }
        }
        return numOfVotes; 
    }
    function winner() public view returns(string,uint) {
        uint largest=candidates[0].totalvotes;
        uint location=0;
        for (uint j = 0; j < numcandidates; j++) {
            if (candidates[j].totalvotes > largest) {
                largest = candidates[j].totalvotes;
                location=j;
            }
        }
        return(candidates[location].name,largest);
    }
    function getNumOfCandidates() public view returns(uint) {
        return numcandidates;
    }

    function getNumOfVoters() public view returns(uint) {
        return numvoters;
    }
    
    function getCandidate(uint candidateID) public view returns (uint,string, string) {
        return (candidateID,candidates[candidateID].name,candidates[candidateID].party);
    }
}