import { db } from '@lib/db';
import { blogTable, userTable } from '@lib/db/schema';
import { eq } from 'drizzle-orm';

export const getAllBlogsForProfile = async (id: string) => {
  const blogs = await db
    .select({
      id: blogTable.id,
      image: blogTable.image,
      title: blogTable.title,
      description: blogTable.description,
      createdAt: blogTable.createdAt,
      authorId: blogTable.authorId,
      authorName: userTable.name,
      authorImage: userTable.image,
    })
    .from(blogTable)
    .innerJoin(userTable, eq(blogTable.authorId, id));

  return blogs;
};
