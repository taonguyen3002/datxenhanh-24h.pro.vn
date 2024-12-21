let posts = [
  {
    id: 1,
    title:
      "Đặt Xe Grab Đồng Nai - Số Điện Thoại Tổng Đài Đặt Xe Ôm Taxi Giao Hàng 0559 023 567",
    link: "https://datxenhanh-24h.pro.vn",
    img: "../assets/image/grab.jpg",
  },
  {
    id: 2,
    title:
      "Đặt Xe Grab Đồng Nai - Tổng Đài Đặt Xe Ôm Taxi Giao Hàng 0559 023 567",
    link: "https://datxenhanh-24h.pro.vn/blogs/grab-dong-nai",
    img: "../assets/image/grab.jpg",
  },
  {
    id: 3,
    title:
      "Đặt Xe Grab Biên Hòa Đồng Nai - Tổng Đài Đặt Xe Ôm Taxi Giao Hàng Biên Hòa 0559 023 567",
    link: "https://datxenhanh-24h.pro.vn/blogs/grab-dong-nai/grab-bien-hoa",
    img: "../assets/image/grab.jpg",
  },
  {
    id: 4,
    title:
      "Đặt Xe Grab Vĩnh Cửu Đồng Nai - Tổng Đài Đặt Xe Ôm Taxi Giao Hàng Vĩnh Cửu 0559 023 567",
    link: "https://datxenhanh-24h.pro.vn/blogs/grab-dong-nai/grab-vinh-cuu",
    img: "../assets/image/grab.jpg",
  },
  {
    id: 5,
    title:
      "Đặt Xe Grab Long Thành Đồng Nai - Tổng Đài Đặt Xe Ôm Taxi Giao Hàng Long Thành 0559 023 567",
    link: "https://datxenhanh-24h.pro.vn/blogs/grab-dong-nai/grab-long-thanh",
    img: "../assets/image/grab.jpg",
  },
  {
    id: 6,
    title:
      "Đặt Xe Grab Nhơn Trạch Đồng Nai - Tổng Đài Đặt Xe Ôm Taxi Giao Hàng Nhơn Trạch 0559 023 567",
    link: "https://datxenhanh-24h.pro.vn/blogs/grab-dong-nai/grab-nhon-trach",
    img: "../assets/image/grab.jpg",
  },
  {
    id: 7,
    title:
      "Đặt Xe Grab Trảng Bom Đồng Nai - Tổng Đài Đặt Xe Ôm Taxi Giao Hàng Trảng Bom 0559 023 567",
    link: "https://datxenhanh-24h.pro.vn/blogs/grab-dong-nai/grab-trang-bom",
    img: "../assets/image/grab.jpg",
  },
  {
    id: 7,
    title:
      "Đặt Xe Grab Long Khánh Đồng Nai - Tổng Đài Đặt Xe Ôm Taxi Giao Hàng Long Khánh 0559 023 567",
    link: "https://datxenhanh-24h.pro.vn/blogs/grab-dong-nai/grab-long-khanh",
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
