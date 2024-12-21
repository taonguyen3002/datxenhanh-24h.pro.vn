let posts = [
  {
    id: 1,
    title:
      "Đặt Xe Grab Đồng Nai - Số Điện Thoại Tổng Đài Đặt Xe Ôm Taxi Giao Hàng 0559 023 567",
    link: "https://datxenhanh-24h.pro.vn",
    img: "../assets/image/grab.jpg",
  },
];

function fetchPosts() {
  return new Promise(function (resolve) {
    resolve(posts);
  });
}

function getRandomPosts(posts, numberOfPosts) {
  if (posts.length <= numberOfPosts) {
    return posts; // Nếu số bài viết <= số bài cần lấy, trả về tất cả bài viết
  }

  let randomPosts = [];
  let usedIndices = new Set();

  while (randomPosts.length < numberOfPosts) {
    let randomIndex = Math.floor(Math.random() * posts.length);
    if (!usedIndices.has(randomIndex)) {
      randomPosts.push(posts[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  return randomPosts;
}

function displayPosts(posts) {
  const postsContainer = document.querySelector(".blogs");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("li");
    postElement.className = "";
    postElement.innerHTML = `<article><figure><img src="${
      post.img || ""
    }" alt="${post.title}" loading="lazy" /></figure><h3 ><a href="${
      post.link
    }">${post.title}</a></h3></article>`;
    postsContainer.appendChild(postElement);
  });
}

async function main() {
  const posts = await fetchPosts();
  const randomPosts = getRandomPosts(posts, 10);
  displayPosts(randomPosts);
}

main();
