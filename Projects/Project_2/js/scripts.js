var randomNum = 0;
//incorporate a function for changing the background
function set_bg(num) {
  switch (num) {
    case 0:
      document.getElementById("all").style.backgroundColor = "#d87093";
      break;
    case 1:
      document.getElementById("all").style.backgroundColor = "#8ad870";
      break;
    case 2:
      document.getElementById("all").style.backgroundColor = "#7075d8";
      break;
    case 3:
      document.getElementById("all").style.backgroundColor = "#e587c9";
      break;
    case 4:
      document.getElementById("all").style.backgroundColor = "#87e5bc";
      break;
  }
}
randomNum = Math.floor(Math.random() * 5);
set_bg(randomNum);
//coding projects i have done
arr_my_code = [
  "https://github.com/therenow9/personal-site",
  "https://github.com/therenow9/team_portfolio_465",
  "https://github.com/therenow9/WXSU-Website",
  "https://github.com/therenow9/personal-site",
  "https://github.com/therenow9/update-website",
  "https://github.com/therenow9/server_landing_page",
  "https://github.com/therenow9/Bagel_Bakery",
  "https://github.com/therenow9/COSC-117-introductory-java",
  "https://github.com/therenow9/minecraft_java.service",
  "https://github.com/therenow9/RPG-Battle-System",
  "https://github.com/therenow9/Tech-Demo-GameMaker",
  "https://github.com/therenow9/COSC-250-Microcomputer-organization",
  "https://github.com/therenow9/COSC-220-Advanced-c-",
  "https://github.com/therenow9/COSC-120-Introductory-C-",
  "https://github.com/therenow9/COSC-380-internship-",
  "https://github.com/therenow9/dat_converter",
  "https://github.com/therenow9/pi_website",
  "https://github.com/therenow9/Dat_conv_master_table",
  "https://github.com/therenow9/checkers-app",
];
randomNum = Math.floor(Math.random() * arr_my_code.length);
document.getElementById("my_code").href = arr_my_code[randomNum];
document.getElementById("my_code_link").href = arr_my_code[randomNum];
document.getElementById("my_code_name").innerHTML =
  arr_my_code[randomNum].substring(29);
//Games I made
arr_games = [
  "images/checkers_project.png",
  "images/cmd_boy_project.png",
  "images/space_shooter_project.png",
  "images/tech-demo.png",
  "images/test_project.png",
];
arr_game_titles = [
  "Charlie and checkers Project",
  "CMD Boy",
  "Space Shooter Project",
  "RPG Battle System",
  "Tech Demo",
];
randomNum = Math.floor(Math.random() * arr_games.length);
document.getElementById("game").src = arr_games[randomNum];
document.getElementById("game-title").innerHTML = arr_game_titles[randomNum];
//Sound cloud songs
arr_my_songs = [
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/805793788&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/805778800&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/813605005&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/813605599&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1091030149&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
];
randomNum = Math.floor(Math.random() * arr_my_songs.length);
document.getElementById("my_song").src = arr_my_songs[randomNum];
//whatcha Playin
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
