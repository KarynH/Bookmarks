const express = require("express");
const bookmarks = express.Router();
const { getAllBookmarks, getBookmark, createBookmark} = require("../queries/bookmarks");

// INDEX
// INDEX
bookmarks.get("/", async (req, res) => {
  const allBookmarks = await getAllBookmarks();
  if (allBookmarks[0]) {
    res.status(200).json(allBookmarks);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//SHOW
bookmarks.get("/:id", async (req, res) => {
  const {id} = req.params;
  const bookmark = await getBookmark(id);
  if(bookmark) {
    res.status(200).json(bookmark)
  }else {
    res.status(404).json({error: "an arror occured"})
  }
})

// CREATE
bookmarks.post("/", async (req, res) => {
  try {
    const bookmark = await createBookmark(req.body);
    res.json(bookmark);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = bookmarks;
