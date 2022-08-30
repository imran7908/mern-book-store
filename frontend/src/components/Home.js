import { Box, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div>
      <Box margin="auto" marginTop="20px" height="500px" width="600px">
        <Typography sx={{ fontFamily: "monospace" }}>
          Goodreads is an American social cataloging website and a subsidiary of
          Amazon that allows individuals to search its database of books,
          annotations, quotes, and reviews. Users can sign up and register books
          to generate library catalogs and reading lists. They can also create
          their own groups of book suggestions, surveys, polls, blogs, and
          discussions. The website's offices are located in San Francisco.
          <br />
          <br />
          <br />
          Goodreads was founded in December 2006 and launched in January 2007 by
          Otis Chandler and Elizabeth Khuri Chandler. In December 2007, the site
          had 650,000 members and 10,000,000 books had been added. By July 2012,
          the site reported 10 million members, 20 million monthly visits, and
          thirty employees. On March 28, 2013, Amazon announced its acquisition
          of Goodreads, and by July 23, 2013, Goodreads announced their user
          base had grown to 20 million members. By July 2019, the site had 90
          million members.
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
