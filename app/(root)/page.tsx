import React from "react";
import { Button } from "@/components/ui/button";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async () => {
  const result = await db.select().from(users);
  console.log(JSON.stringify(result, null, 2));

  return (
    <>
      <BookOverview
        {...{
          ...sampleBooks[0],
          totalCopies: sampleBooks[0].total_copies ?? 0,
          availableCopies: sampleBooks[0].available_copies ?? 0,
        }}
      />

      <BookList
        title="Latest Books"
        books={sampleBooks.map(book => ({
          ...book,
          totalCopies: book.total_copies ?? 0,
          availableCopies: book.available_copies ?? 0,
        }))}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
