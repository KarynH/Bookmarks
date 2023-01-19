const bookmarks = require("../controllers/bookmarkController.js");
const db = require("../db/dbConfig.js");

//We will get the id from the req.params in the show route (in bookmarkController - see below).
const getBookmark = async (id) => {
  try {
    //We will use db.one because we expect one row to be returned.
    const oneBookmark = await db.one("SELECT * FROM bookmarks WHERE id=$1", id);
    // await db.one("SELECT * FROM bookmarks WHERE id=$[id]", {
    //   id: id,
    // });
    return oneBookmark;
  } catch (error) {
    return error;
  }
};

//connects to the data base .any() takes a string of a sql query
//await operator that is used to wait for a promise's fulfillment value. in >> asnyc functions
const getAllBookmarks = async () => {
  try {
    const allBookmarks = await db.any("SELECT * FROM bookmarks");
    return allBookmarks;
  } catch (error) {
    return error;
  }
};



  // CREATE
const createBookmark = async (bookmark) => {
  try {
    const newBookmark = await db.one(
      "INSERT INTO bookmarks (name, url, category, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
      [bookmark.name, bookmark.url, bookmark.category, bookmark.is_favorite]
    );
    return newBookmark;
  } catch (error) {
    return error;
  }
};


module.exports = { getAllBookmarks, getBookmark, createBookmark };
