document.getElementById('donation-history').addEventListener('click', function(){
    console.log("btn clicked show....");
    document.getElementById('main-container').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');
    
})
document.getElementById('donation-btn').addEventListener('click', function(){
   
    document.getElementById('main-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
  


})