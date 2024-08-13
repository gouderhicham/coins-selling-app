export function generateUUID() {
  const chars = "0123456789abcdef";
  const sections = [8, 4, 4, 4, 12];
  let uuid = "";
  for (let i = 0; i < sections.length; i++) {
    for (let j = 0; j < sections[i]; j++) {
      uuid += chars[Math.floor(Math.random() * chars.length)];
    }
    if (i < sections.length - 1) {
      uuid += "-";
    }
  }
  return uuid;
}

// useMemo(() => {
//     async function nameme() {
//       let { data: posts, error } = await supabase
//         .from("posts_for_index_page")
//         .select("*");
//       setPosts((prev) => posts);
//     }
//     nameme();
//   }, []);

// useMemo(() => {
//   async function nameme() {
//     let { data: posts, error } = await supabase
//       .from("posts")
//       .select("*").eq("user_id" , user)
//       .range(0, 10);
//     setPosts((prev) => posts);
//   }
//   nameme();
// }, []); 