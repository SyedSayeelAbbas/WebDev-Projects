// $(document).ready(function () {
//     // Text animation
//     $('.text').textillate({
//         loop: true,
//         sync: true,
//         in: {
//             effect: "bounceIn",
//         },
//         out: {
//             effect: "bounceOut",
//         },
//     });

//     // Siri configuration
//     var siriWave = new SiriWave({
//         container: document.getElementById("siri-container"),
//         width: 800,
//         height: 200,
//         style: "ios9",
//         amplitude: "1",
//         speed: "0.30",
//         autostart: true
//     });

//     // Siri message animation
//     $('.siri-message').textillate({
//         loop: true,
//         sync: true,
//         in: {
//             effect: "fadeInUp",
//             sync: true,
//         },
//         out: {
//             effect: "fadeOutUp",
//             sync: true,
//         },
//     });

//     // Mic button click event
//     $("#Micbtn").click(function () {
//         eel.playAssistantSound();  // Optional sound function if defined

//         $("#Oval").attr("hidden", true);
//         $("#SiriWave").attr("hidden", false);

//         eel.allCommands();  // ✅ Only one set of parentheses
//     });
//     // Send button click event  ✅✅ (YOU NEED THIS)
//     $("#SendBtn").click(function () {
//         var message = $("#chatbox").val();  // 📝
//         PlayAssistant(message);             // ▶
//     });
//     // Press Enter key inside chatbox to send
//     $("#chatbox").keypress(function (e) {
//         if (e.which == 13) { // Enter key code
//             e.preventDefault();
//             var message = $(this).val();
//             PlayAssistant(message);
//         }
//     });

//     // Key press event for Meta + J
//     function doc_keyUp(e) {
//         console.log(Key pressed: ${e.key} with meta: ${e.metaKey}); // Fixed syntax error

//         if (e.key === 'j' && e.metaKey) {
//             eel.playAssistantSound();
//             $("#Oval").attr("hidden", true);
//             $("#SiriWave").attr("hidden", false);
//             eel.allCommands();
//         }
//     }

//     document.addEventListener('keyup', doc_keyUp, false);

//     // Play Assistant function
//     function PlayAssistant(message) {
//         if (message != "") {
//             $("#Oval").attr("hidden", true);
//             $("#SiriWave").attr("hidden", false);
//             eel.allCommands(message);
//             // Append the message to the chat container
//             $("#chat-container").append(<div class="user-message">${message}</div>); // Add the user's message
//             $("#chatbox").val(""); // Clear chatbox
//             $("#Micbtn").css('display', 'block');  // Show mic button
//             $("#SendBtn").css('display', 'none');  // Hide send button
//         }
//     }

//     // Toggle function to hide and display mic and send button
//     function ShowHideButton(message) {
//         if (message.length == 0) {
//             $("#Micbtn").css('display', 'block');  // Show mic button
//             $("#SendBtn").css('display', 'none');  // Hide send button
//         } else {
//             $("#Micbtn").css('display', 'none');  // Hide mic button
//             $("#SendBtn").css('display', 'block');  // Show send button
//         }
//     }

//     // Monitor input field changes and show/hide buttons
//     $("#chatbox").on("input", function() {
//         ShowHideButton($(this).val()); // Pass the chatbox value
//     });
// });