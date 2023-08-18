let myLandbot;

let current_size = "L";
let pastsize = "L";
let material = "demo material text copy";
let efitter_name = "John Doe";
let efitter_email = "gdpr@stuff.never";
let efitter_productName = "We are on a blank page";
let efitter_sizeFromPage = "XS";
let efitter_category = "Tops";

async function setupLandbot() {
  if (myLandbot === undefined) {
    try {
      myLandbot = await new Landbot.Livechat({
        configUrl:
          "https://chats.landbot.io/v3/H-797304-UVDV4IAXQLKG7OE6/index.json",
        customData: {
          size: current_size,
          pastsize: pastsize,
          material: material,
          firstname: efitter_name.split(" ")[0],
          lastname: efitter_name.split(" ")[1],
          email: efitter_email,
          productName: efitter_productName,
          sizeFromPage: efitter_sizeFromPage,
          category: efitter_category,
        },
      });
      isPresent = true;
      setTimeout(() => {
        myLandbot.open();
      }, 500);
    } catch (ex) {
      console.log(ex + "!!!!");
      setTimeout(setupLandbot, 500);
    }
  }
}
