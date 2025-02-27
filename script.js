// Dán thông tin Firebase của cậu vào đây!
const firebaseConfig = {
    apiKey: "AIzaSyD-xxxxxxxxxxxxxx",
    authDomain: "chat-app-xxxx.animecharacter.com",
    databaseURL: "https://chat-app-xxxx-default-rtdb.firebaseio.com",
    projectId: "chat-app-xxxx",
    storageBucket: "chat-app-xxxx.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:xxxxxxxxxxxxx"
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref("messages");

// Hàm gửi tin nhắn
function sendMessage() {
    let message = document.getElementById("message").value;
    if (message.trim() !== "") {
        db.push({ text: message });
        document.getElementById("message").value = "";
    }
}

// Hiển thị tin nhắn trong chat box
db.on("child_added", function(snapshot) {
    let msg = snapshot.val().text;
    let div = document.createElement("div");
    div.textContent = msg;
    document.getElementById("chat-box").appendChild(div);
});
