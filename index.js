function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    console.log("This one is on me!")
    return "This one is on me!";
  } else if (someValue > 400 && someValue < 2000) {
    console.log("That will be twenty bucks.")
    return "That will be twenty bucks."
  } else if (someValue > 2000 && someValue <= 2500) {
    console.log("I will gladly take your thirty bucks.")
    return "I will gladly take your thirty bucks."
  } else return "No can do."

};


scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city) {


  const isNYC = city === "NYC" ? "Ok, sounds good." : "No go."
  return isNYC;
};

ternaryCheckCity("NYC");
ternaryCheckCity("Pittsburgh");


function switchOnCharmFromTip(tip) {

  let reply;


    switch (tip) {
      case 'generous':
      return reply = "Thank you so much."
      case 'not as generous':
        return reply = "Thank you."
      default:
        return reply = "Bye."
    }
};

switchOnCharmFromTip("generous");
switchOnCharmFromTip("not as generous");
switchOnCharmFromTip("thanks for everything");