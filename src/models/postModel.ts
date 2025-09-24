import mongoose from "mongoose";
import slugify from 'slugify'
const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    isDraft: { type: Boolean, default: false },
    tags: [String],

    likes: { type: Number, default: 0 },
    upvotes: { type: Number, default: 0 },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

postSchema.pre("validate", async function (next) {
  if (this.title && !this.slug) {
    let baseSlug = slugify(this.title, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;

    // Check if slug already exists
    while (await mongoose.models.Post.findOne({ slug })) {
      slug = `${baseSlug}-${counter++}`;
    }

    this.slug = slug;
  }
  next();
});

const Post=mongoose.model('Post',postSchema)

export default Post;