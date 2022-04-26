// function templat eto randomly choose from the array only works with text
function chooseRandom(arr, doc_id) {
  var randomNum = Math.floor(Math.random() * arr.length);
  document.getElementById(doc_id).innerHTML = arr[randomNum];
}
var randomNum = 0;
arr_quotes = [
  "Have You Ever Danced With The Devil In The Pale Moonlight? -The Joker (Batman 1989)",
  "Here's To Swimmin With Bowlegged Women! - Quint (Jaws)",
  "Hold on, Sugar! Daddy has got a sweet tooth tonight! - Stanley Ipkiss (The Mask)",
  "Sell Me This Pen. - Jordan Belfort (The wolf of Wall street)",
  "We're gonna draw a little bit of everyone's blood, 'cause we're gonna find out who's the Thing - Macready (The Thing)",
  " The only thing in this world that gives orders... is balls. - Tony Montana (Scarface)",
];
chooseRandom(arr_quotes, "quote");
// example of function running for channgin text
arr_pics = [
  "https://alchetron.com/cdn/master-shake-1e400e3a-9ae2-4216-9096-c491a073f0a-resize-750.gif",
  "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-city%2FEGS_WB_Batman_Arkham_City_G1_1920x1080_19_0911-1920x1080-24a7b872daf28b18cfdac0ae92e656964786a0ce.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1740cdf7-bf1c-4873-8e0f-a94ca32f9709/d1xw6be-fdaff437-9d20-405a-8a23-5475a5eb7183.jpg/v1/fill/w_796,h_1003,q_70,strp/mr__and_dr__mrs__the_monarch_by_jeftoon01_d1xw6be-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwOCIsInBhdGgiOiJcL2ZcLzE3NDBjZGY3LWJmMWMtNDg3My04ZTBmLWE5NGNhMzJmOTcwOVwvZDF4dzZiZS1mZGFmZjQzNy05ZDIwLTQwNWEtOGEyMy01NDc1YTVlYjcxODMuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.nTZ3dfAnUAK53Q3A3JvdC42BS-dGoSkXJPJT9MOVm6Y",
  "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/07/big-boss-metal-gear-solid-5.jpg",
  "https://i.pinimg.com/736x/d1/f7/f5/d1f7f5f70e731886ec5f064b66d190b9--anime-fan-art-link-zelda.jpg",
];
randomNum = Math.floor(Math.random() * arr_pics.length);
document.getElementById("pic").src = arr_pics[randomNum];
arr_videos = [
  "https://www.youtube.com/embed/ITvzRXovLn8",
  "https://www.youtube.com/embed/J1ufRzQGtFc",
  "https://www.youtube.com/embed/Funq6IbnFKk",
  "https://www.youtube.com/embed/MX5WP1fSTk4",
  "https://www.youtube.com/embed/HJoanxO96So",
  "https://www.youtube.com/embed/KkhgNu8nIw8",
  "https://www.youtube.com/embed/tW-DjHOz2UQ",
  "https://www.youtube.com/embed/iFpT3OnPrAA",
  "https://www.youtube.com/embed/y5hODn2JbJw",
];
randomNum = Math.floor(Math.random() * arr_videos.length);
document.getElementById("vid").src = arr_videos[randomNum];
