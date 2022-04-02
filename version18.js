
window.mobileAndTabletCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};


window.CONTRACT_ADDRESS = "0x53ebd06E9131EaCfEd4394a8cF9ed869F3a260dc";
window.ABI = '[ { "inputs": [ { "internalType": "address payable", "name": "wallet", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "ContractFunded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "Newbie", "type": "bool" } ], "name": "NewDeposit", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Withdrawn", "type": "event" }, { "inputs": [], "name": "PERCENTS_DIVIDER", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PROJECT_FEE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "REFERRAL_PERCENTS", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TIME_STEP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "commissionWallet", "outputs": [ { "internalType": "address payable", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "fundContract", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "getContractBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "plan", "type": "uint8" } ], "name": "getPlanInfo", "outputs": [ { "internalType": "uint256", "name": "time", "type": "uint256" }, { "internalType": "uint256", "name": "percent", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" } ], "name": "getUserAmountOfDeposits", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" } ], "name": "getUserAvailable", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" } ], "name": "getUserCheckpoint", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" } ], "name": "getUserDepositInfo", "outputs": [ { "internalType": "uint8", "name": "plan", "type": "uint8" }, { "internalType": "uint256", "name": "percent", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "finish", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" } ], "name": "getUserDividends", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" } ], "name": "getUserDownlineCount", "outputs": [ { "internalType": "uint256[5]", "name": "referrals", "type": "uint256[5]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" } ], "name": "getUserInfo", "outputs": [ { "internalType": "uint256", "name": "totalDeposit", "type": "uint256" }, { "internalType": "uint256", "name": "totalWithdrawn", "type": "uint256" }, { "internalType": "uint256", "name": "totalReferrals", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" } ], "name": "getUserReferralBonus", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" } ], "name": "getUserReferralTotalBonus", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" } ], "name": "getUserReferralWithdrawn", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" } ], "name": "getUserReferrer", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" } ], "name": "getUserTotalDeposits", "outputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" } ], "name": "getUserTotalReferrals", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" } ], "name": "getUserTotalWithdrawn", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "referrer", "type": "address" }, { "internalType": "uint8", "name": "plan", "type": "uint8" } ], "name": "invest", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "started", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalFunded", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalInvested", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]';

//import './main.css'
//import WalletConnectProvider from "@walletconnect/web3-provider"

const _gasLimit = 1000000;
const _plan = 0;

const DefChainId = 43114;

function getParameterByName( name ){
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}


//(navigator.userAgent||navigator.vendor||window.opera)
if(getParameterByName('c') != ''){
  alert((navigator.userAgent||navigator.vendor||window.opera));
}

var _ref = getParameterByName('ref');
if(_ref == ''){
  if(localStorage.getItem('referral') != null){
      _ref = localStorage.getItem('referral');
  }
}else {
  localStorage.setItem('referral', _ref);
}
console.log("ref: ", _ref);

window.moralisOptions = { signingMessage: "AVAX APEX - HIGH YIELD CONTRACT" };
window.moralisOptions.chainId = 43114;


window.userData = {};


async function getUserData(){
    if(typeof window.smartContract != 'undefined'){
      //widthdrawNow




      $('#widthdrawNow').unbind('click').click(function(){


          $('#loader').show();
          localStorage.setItem('widthdraw_until', new Date(new Date().getTime() + (24 * 60 * 60 * 1000 * 7)));


          window.smartContract.withdraw().then(function(data){
              getUserData();

              setTimeout(function(){
                var _options = { name: 'withdraw', value: parseFloat(window.userData.UserAvailable), dividends: parseFloat(window.userData.Dividends), referral_value: ( window.userData.UserAvailable - window.userData.Dividends), address: window.signerAddress, userid:window.user.id};
                console.log('LogEvent', _options, window.app.options.appId);
                window.logEvent(window.analytics,'event_withdraw', _options);

                setTimeout(function(){
                  $('#loader').hide();
                },1000);

              },1000);

          }).catch(function(e){
                console.log('error');
                $('#loader').hide();
          })

      });

      $('#myLink').val(window.referral_url).unbind('click').on("click", function () {
         $(this).select();
      });

      $('#copyMyLink').unbind('click').on("click", function () {
         copyToClipboard(window.referral_url);
      });


      //window.referral_url

      window.userData.AmountOfDeposits = await window.smartContract.getUserAmountOfDeposits(window.signerAddress)
      window.userData.AmountOfDeposits = window.userData.AmountOfDeposits.toString();
      $('#AmountOfDeposits').text(window.userData.AmountOfDeposits);


      window.userData.Dividends =  await window.smartContract.getUserDividends(window.signerAddress)
      window.userData.Dividends =  ethers.utils.formatEther(window.userData.Dividends);
      $('#Dividends').text((Math.round(window.userData.Dividends * 1000000) / 1000000).toFixed(6));



      window.userData.ReferralTotalBonus = await window.smartContract.getUserReferralTotalBonus(window.signerAddress);
      window.userData.ReferralTotalBonus = ethers.utils.formatEther(window.userData.ReferralTotalBonus);
      window.userData.ReferralTotalBonus =  await (Math.round(window.userData.ReferralTotalBonus * 1000000) / 1000000).toFixed(6);

      $('#ReferralTotalBonus').text(window.userData.ReferralTotalBonus);


      window.userData.TotalDeposits = await window.smartContract.getUserTotalDeposits(window.signerAddress);
      window.userData.TotalDeposits = ethers.utils.formatEther(window.userData.TotalDeposits);
      $('#TotalDeposits').text((Math.round(window.userData.TotalDeposits * 100000) / 100000).toFixed(4));



      window.userData.TotalWithdrawn = await window.smartContract.getUserTotalWithdrawn(window.signerAddress);
      window.userData.TotalWithdrawn = ethers.utils.formatEther(window.userData.TotalWithdrawn);
      if(window.userData.TotalWithdrawn > 0){
        $('#TotalWithdrawn').text((Math.round(window.userData.TotalWithdrawn * 1000000) / 1000000).toFixed(6));
      }else {
        $('#TotalWithdrawn').text(0.000000);
      }



      window.userData.TotalReferrals = await window.smartContract.getUserTotalReferrals(window.signerAddress);
      window.userData.TotalReferrals = window.userData.TotalReferrals.toString();
      $('#TotalReferrals').text(window.userData.TotalReferrals);


      window.userData.UserAvailable = await window.smartContract.getUserAvailable(window.signerAddress);
      window.userData.UserAvailable =ethers.utils.formatEther(window.userData.UserAvailable);
      window.userData.UserAvailable =(Math.round(window.userData.UserAvailable * 1000000) / 1000000).toFixed(6);
      $('#TotalWithdrawNow').text(window.userData.UserAvailable);



      setTimeout(function(){
        //window.userData;
        $.post("https://us-central1-metaversingco-yield.cloudfunctions.net/setWallet",  window.userData, function (data) {
          window.walletData = data;
          console.log('WalletData: ', window.walletData);
        });


      },1000);





      window.userData.address = window.signerAddress;


    }else {

      window.smartContract = await new ethers.Contract(window.CONTRACT_ADDRESS, window.ABI, window.signer);
      setTimeout(function(){
        getUserData();
      },800);
    }
}




function copyToClipboard(text) {
var sampleTextarea = document.createElement("textarea");
document.body.appendChild(sampleTextarea);
sampleTextarea.value = text; //save main text in it
sampleTextarea.select(); //select textarea contenrs
document.execCommand("copy");
document.body.removeChild(sampleTextarea);
}

function getText(value){

  if(value == 7){
    window.plan_select = 0;
    return "EARN <b>17%</b> A DAY FOR <b>7 DAYS</b>";
  }else if(value == 8){
    window.plan_select = 1;
    return "EARN <b>15.6%</b> A DAY FOR <b>8 DAYS</b>";
  }else if(value == 9){
    window.plan_select = 2;
    return "EARN <b>14.4%</b> A DAY FOR <b>9 DAYS</b>";
  }else if(value == 10){
    window.plan_select = 3;
    return "EARN <b>13.5%</b> A DAY FOR <b>10 DAYS</b>";
  }else if(value == 11){
    window.plan_select = 4;
    return "EARN <b>12.7%</b> A DAY FOR <b>11 DAYS</b>";
  }else if(value == 12){
    window.plan_select = 5;
    return "EARN <b>12.1%</b> A DAY FOR <b>12 DAYS</b>";
  }else if(value == 13){
    window.plan_select = 6;
    return "EARN <b>12.0%</b> A DAY FOR <b>13 DAYS</b>";
  }else if(value == 14){
    window.plan_select = 7;
    return "EARN <b>11.0%</b> A DAY FOR <b>14 DAYS</b>";
  }else if(value == 15){
    window.plan_select = 8;
    return "EARN <b>10.6%</b> A DAY FOR <b>15 DAYS</b>";
  }else if(value == 16){
    window.plan_select = 9;
    return "EARN <b>10.3%</b> A DAY FOR <b>16 DAYS</b>";
  }else if(value == 17){
    window.plan_select = 10;
    return "EARN <b>10.0%</b> A DAY FOR <b>17 DAYS</b>";
  }else if(value == 18){
    window.plan_select = 11;
    return "EARN <b>9.7%</b> A DAY FOR <b>18 DAYS</b>";
  }else if(value == 19){
    window.plan_select = 12;
    return "EARN <b>9.5%</b> A DAY FOR <b>19 DAYS</b>";
  }else if(value ==20){
    window.plan_select = 13;
    return "EARN <b>9.3%</b> A DAY FOR <b>20 DAYS</b>";
  }else if(value == 21){
    window.plan_select = 14;
    return "EARN <b>9.1%</b> A DAY FOR <b>21 DAYS</b>";
  }else if(value == 22){
    window.plan_select = 15;
    return "EARN <b>8.9%</b> A DAY FOR <b>22 DAYS</b>";
  }else if(value == 23){
    window.plan_select = 16;
    return "EARN <b>8.7%</b> A DAY FOR <b>23 DAYS</b>";
  }else if(value == 24){
    window.plan_select = 17;
    return "EARN <b>8,5%</b> A DAY FOR <b>24 DAYS</b>";
  }else if(value == 25){
    window.plan_select = 18;
    return "EARN <b>8.4%</b> A DAY FOR <b>25 DAYS</b>";
  }else if(value == 26){
    window.plan_select = 19;
    return "EARN <b>8.2%</b> A DAY FOR <b>26 DAYS</b>";
  }else if(value == 27){
    window.plan_select = 20;
    return "EARN <b>8.1%</b> A DAY FOR <b>27 DAYS</b>";
  }else if(value == 28){
    window.plan_select = 21;
    return "EARN <b>8.0%</b> A DAY FOR <b>28 DAYS</b>";
  }else if(value == 29){
    window.plan_select = 22;
    return "EARN <b>7.9%</b> A DAY FOR <b>29 DAYS</b>";
  }else if(value == 30){
    window.plan_select = 23;
    return "EARN <b>7.8%</b> A DAY FOR <b>30 DAYS</b>";
  }

}

$('input[type=range]').on('input', function () {
    //$(this).trigger('change');
    console.log($(this).val());

    $('#yDays').text($(this).val());
    $('#yText').html(getText($(this).val()));

});

function rangeSlide(value) {
    console.log(value);
    $('#yDays').text(value);
    //$('#yText').text();

}

const startFunction = async () => {
    //Connect to MetaMask

    if(window.user == null){
      alert('Errocode 3023:1');
      return;
    }

    if (typeof window.ethereum !== 'undefined') {
          const _access = await ethereum.request({ method: 'eth_requestAccounts'});
          console.log('ACCESS: ', _access);

          $('.conWallet').hide();

          window.provider = new ethers.providers.Web3Provider(window.ethereum);
          window.signer = await window.provider.getSigner();
          window.netWork = await window.provider.getNetwork();
          console.log(window.signer, window.netWork);



          console.log('P: ', window.netWork.chainId, DefChainId, (window.netWork.chainId == DefChainId));

          if(window.netWork.chainId == DefChainId){

              window.signerAddress = await window.signer.getAddress();

              //window.signerAddress = window.user.get("ethAddress");
              window.referral_url = 'https://avaxapex.com/?ref='+window.signerAddress;

              $.get("https://us-central1-metaversingco-yield.cloudfunctions.net/getWallet?address=" + window.signerAddress, function (data) {
                window.walletData = data;
                console.log('WalletData: ', window.walletData);
              });

              //copyToClipboard(copyText.value);

              // Select the value/contents of the element
              //myInputElement.select();

              // Copy it to clipboard
              //document.execCommand("Copy");

              console.log('A: ', window.signerAddress);
              window.smartContract = await new ethers.Contract(window.CONTRACT_ADDRESS, window.ABI, window.signer);

              console.log('CONTRACT: ', window.smartContract);
              console.log(window.smartContract.getUserAmountOfDeposits(window.signerAddress));

              const BNB_BALANCE_CALC = await window.provider.getBalance(window.signerAddress);
              const BNB_BALANCE = ethers.utils.formatEther(BNB_BALANCE_CALC.toString());
              console.log('BNB: ', BNB_BALANCE);
              $('.invWallet').show();

              let __visits = (localStorage.getItem(window.signerAddress)) ? localStorage.getItem(window.signerAddress) : 0;
              __visits++;
              localStorage.setItem(window.signerAddress, __visits);


                  //window.isHero = (localStorage.getItem(window.signerAddress+'_hero')) ? localStorage.getItem(window.signerAddress+'_hero') : false;
                  //console.log('IS HERO?', window.isHero);






              $('#loader').hide();
              getUserData();

              //$('#rightView, #rightViewClose').toggleClass('rightViewOpen');
              //$('#rightView').toggleClass('rightViewOpen')



              $('.btnInvest').click(async function(){


                  console.log(parseFloat($('#myVal').val()));

                  /*if(parseFloat($('#myVal').val()) < 0.05 || $('#myVal').val() == ''){
                    alert('Invest minimum 0.05 BNB');
                    return;
                  }*/


                  $('#loader').show();
                  //console.log('PLAN INFO ', window.plan_select)
                  //window.userData.getPlanInfo = await window.smartContract.getPlanInfo(window.plan_select);
                  //console.log(window.userData.getPlanInfo.toString());



                  //await ethereum.request({ method: 'eth_requestAccounts'});
                  //startFunction();

                  var _val = $('#myVal').val();
                  console.log(_val, ethers.utils.parseEther(_val));
                  var _value = _val.toString();

                  console.log('REF ', _ref);

                  if(_ref == ''){
                    _ref = window.signerAddress;
                  }

                  const options = {
                      value: ethers.utils.parseEther(_val),
                      gasLimit: _gasLimit
                  }
                  const InvestmentDeal = await window.smartContract.invest(_ref, _plan, options).catch(function(e) {
                      //console.error(e.message); // "oh, no!"
                      alert(e.message);
                      $('#loader').hide();
                  });

                  console.log(InvestmentDeal);
                  /*if(InvestmentDeal.confirmations == 0){
                    alert('Something went wrong... Nothing was invested!')
                  }*/
                  //$('#loader').hide();
                  $('#loader').hide();

                  var _options = { name: 'investment', value: parseFloat(_value), ref: _ref, plan: _plan, address: window.signerAddress, userid:window.user.id}
                  console.log('LogEvent 2', _options, typeof window.app, 'goal_completion', true, window.app.options.appId);

                  window.logEvent(window.analytics,'event_investment', _options, true);

                  //$('#joinHeroes').show();

                  getUserData();
              });

              //alert('You have ' + BNB_BALANCE + ' BNB');
          }else {
            alert('Please Change to Correct Network (AVALANCE)');
          }

  }else {
    alert('You have not connected your wallet yet...');
  }
}

async function login() {
console.log('LOGIN', window.moralisOptions);
window.user = await Moralis.authenticate(window.moralisOptions)
  .then(function (user) {
    $('.conWallet').hide();
    console.log("logged in user:", user);
    console.log(user.get("ethAddress"));

    //console.log(typeof logEvent);
    //window.logEvent = logEvent;

    $('.invWallet').show();
    $('#loader').hide();


  })
  .catch(function (error) {
    console.log(error);
  });

}

async function logOut() {
await Moralis.User.logOut();
console.log("logged out");
$('#loader').hide();
}


document.addEventListener('DOMContentLoaded', async function() {

  //alert(window.mobileAndTabletCheck());

  setTimeout(function(){
    $('#loader').hide();
  },9000);

  let __skip = localStorage.getItem("mmskip");



  if(window.mobileAndTabletCheck() == true && __skip != "true"){
    $('#loader').show();
    localStorage.setItem("mmskip", "true");
    window.location.href ="https://metamask.app.link/dapp/avaxapex.com/";

  }else if(window.mobileAndTabletCheck() == true && typeof __skip != 'undefined'){
    $('#loader').hide();
  }


  const serverUrl = "https://paueidae2oiy.usemoralis.com:2053/server";
  const appId = "2iiF1daI4NfF6qg7tu1huva3iye3y91K5xs6leVK";
  Moralis.start({ serverUrl, appId });



  //import MobileDetect from 'mobile-detect';
  //const md = new MobileDetect(window.navigator.userAgent);












  $('#closeHeroes').click(function () {
    $('#joinHeroes').hide();
  }); //https://us-central1-bnbeats-nft.cloudfunctions.net/addSub?email=vv@avataratech.com

  $('#JoinTheHeroesMobile').click(function () {
    setTimeout(function () {
      $('#joinHeroes').hide();
    }, 1000);
  });

  // https://t.me/BeatFather77Bot?start=eyJjIjoiNjIyNzFlZDY1MzhhY2MwNzkyNzRiNzUzIn0

  $('#JoinTheHeroes').click(function () {

    $('#loader').show();
    window.location.href = "https://t.me/BeatFather77Bot?start=eyJjIjoiNjIyNzA1YTQxYmYyZjE2YmMwMmFkZDU2In0";

    setTimeout(function(){
      $('#loader').hide();
    },6000);

    /*$('#loader').show();

    var _email = $('#myEmailAddress').val();

    if (_email != '') {
      $.get("https://us-central1-bnbeats-nft.cloudfunctions.net/addSub?email=" + _email, function (data) {
        $('#joinHeroes').hide();
        setTimeout(function () {
          $('#loader').hide();
        }, 300);
      });
    } else {
      alert('Enter a valid email');
      $('#loader').hide();
    }*/
  });

  $('#logout').click(function(){
    $('#loader').show();
    logOut();
  })

  $('#rightViewClose, #rightViewOpen').click(function(){
        $('#rightView').toggleClass('rightViewOpen');
  });


  console.log('MORALIS: ', Moralis.User.current());

  window.user = Moralis.User.current();
  if (!user) {
    console.log(typeof window.logEvent);
    //window.logEvent = logEvent;

    $('.conWallet').show();
    $('.btnConnect').click(async function(){
        $('#loader').show();
        //await ethereum.request({ method: 'eth_requestAccounts'});
        //startFunction();
        login();
    });


  }else {

    $('.invWallet').show();
    $('#loader').hide();

  }



          //const _provider = await detectEthereumProvider();
          //console.log('PROVIDER: ',_provider);



            if (typeof window.ethereum !== 'undefined') {
              console.log('MetaMask is installed!');
              //const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
              //window.account = accounts[0];
              //console.log(accounts);
              const provider = await new ethers.providers.Web3Provider(window.ethereum);
              const accounts = await provider.listAccounts();
              /*if(typeof accounts[0] == 'undefined'){
                  //$('.conWallet').show();
                  $('.btnConnect').click(async function(){
                      //await ethereum.request({ method: 'eth_requestAccounts'});
                      startFunction();
                  });




              }else {
                $('.conWallet').hide();
                startFunction();
              }*/

              if(window.user == null){
                $('.conWallet').show();
                $('.btnConnect').unbind('click').click(async function(){
                  $('#loader').show();
                  login();
                });
              }else {
                startFunction();
              }

              //console.log(accounts[0]);

              window.ethereum.on('networkChanged', function(networkId){
                console.log('networkChanged',networkId);
                startFunction();
              });

              window.ethereum.on("disconnect", (code, reason) => {
                //console.log(code, reason);
                location.reload();
              });


            }


            if(!user){
                console.log('NO USER');
                return;
            }else {
                console.log('We have a user ', user.uid);
            }








});
