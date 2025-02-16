import prisma from "@/lib/prisma";

async function testPrisma() {
  try {
    // Create a user if none exists
    let user = await prisma.user.findFirst();

    if (!user) {
      user = await prisma.user.create({
        data: {
          id: "user_test", // Use a unique ID
        },
      });
      console.log("✅ New User Created:", user);
    }

    // Now create a post linked to this user
    const post = await prisma.post.create({
      data: {
        title: "Test Post",
        content: "This is a test post",
        userId: user.id, // Use the newly created user
      },
    });

    console.log("✅ Post Successfully Created:", post);
  } catch (error) {
    console.error("❌ Prisma Test Error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testPrisma().then(() => process.exit());
