import constants from "./constants";

export const blocksData = [
    {
        mouseEnterCallback: () => console.log("hi from Block 1"),
        imgSrc:
            "https://ohmylook.ua/files/products/42504.290x484.JPG?ce7d3c50d2e66b146f8711dd9eb7af35",
        imgAlt: "my picture",
        showContent: constants.IMAGE,
        id: 0
    },
    {
        mouseEnterCallback: () => console.log("hi from Block 2"),
        content: "Magdalena",
        showContent: constants.CONTENT,
        id: 1
    },
    {
        mouseEnterCallback: () => console.log("hi from Block 3"),
        userData: { country: "USA", street: "Maskavas" },
        showContent: constants.ADDRESS,
        id: 2
    }
];
