pragma solidity ^0.4.12;

contract LikeToBit 
{
	address owner;
	address advertisingWallet;
	address blogerWallet;
	
	// exchange rate ETH/Likes
	uint8 ethPLikes = 1;
	
	mapping (address => uint) public coinBalanceOf;
    event CoinTransfer(address sender, address receiver, uint amount);
	
	function LikeToBit(address adsWallet, address blWallet)
	{
	    owner = msg.sender;
	    advertisingWallet = adsWallet;
	    blogerWallet = blWallet;
	}
	
	function kill()
	{
	    if(msg.sender == owner)
	    {
	        //in progress
	        selfdestruct(owner);
	    }
	}
	// @brief Create Ads campain
    // @param _ethValue ads budget
    // @param _hashtag ads hashtag
    // @param _endDate ads end date
	function createAdsItem(uint _ethValue, string _hashtag, uint8 _endDate)
	 returns(bool sufficient)
	{
	    // some code to write data to array
	    
	    //send ethereum to advertisingWallet
        sendCoin(msg.sender, advertisingWallet, _ethValue);
	}
	
	// @brief Close advertising campaine
	// @param _hashtag advertising hashtag
	function closeAdsItem(string _hashtag) returns(bool sufficient)
	{
	    uint ethValue = 0;
	    
	    //some code
	    
	    
	    //transfer ETH for ads by likes
	    if(ethValue > 0)
	        sendCoin(blogerWallet, msg.sender, ethValue);
	    return true;
	}
	
	// @brief Convert Like to ETH
	// @param _postID instagram post id
	// @param _hashtag advertising hashtag
	// @param _likes from post
	function setLikesAdsItem(uint8 _postID, string _hashtag, uint8 _likes)
	    returns(bool sufficient)
	{
	    uint ethValue = 0;
	    address adsAddress;
	    //some code
	    
	    //transaction ethereum from ads to bloger
	    if(ethValue > 0)
	        sendCoin(advertisingWallet, blogerWallet, ethValue);
	    return true;
	}
	
	// @brief Get Ethereum for advertising by likes
	// @param _postID instagram post id
	// @param _hashtag advertising hashtag
	function getLikesAdsRevard(uint8 _postID, string _hashtag) 
	    returns(bool sufficient)
	{
	    uint ethValue = 0;
	    
	    //some code
	    
	    
	    //transfer ETH for ads by likes
	    if(ethValue > 0)
	        sendCoin(blogerWallet, msg.sender, ethValue);
	    return true;
	}
	
	// @brief Private function to send ethereum
	// @param _sender Sender
	// @param _receiver Reciver
	// @param _amount Amount of coint transfer
	function sendCoin(address _sender,  address _receiver, uint _amount) 
	    private returns(bool sufficient) 
	{
        if (coinBalanceOf[_sender] < _amount) 
            return false;
            
        coinBalanceOf[_sender] -= _amount;
        coinBalanceOf[_receiver] += _amount;
        CoinTransfer(_sender, _receiver, _amount);
        return true;
    }
}