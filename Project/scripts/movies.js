const favorites = JSON.parse(localStorage.getItem("favorites"));
if (!favorites) localStorage.setItem("favorites", JSON.stringify([]));

document.addEventListener("DOMContentLoaded", function () {
  //   GALLERY
  const gallery = [
    {
      id: 1,
      url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/interstellar-139399_500x749.jpg?v=1708527823",
      title: "Interstellar",
    },
    {
      id: 2,
      url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/Ghostbusters.103027_500x749.jpg?v=1707500447",
      title: "Ghostbusters",
    },
    {
      id: 3,
      url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/backtofuture.mpw_500x749.jpg?v=1708444122",
      title: "Back to the Future",
    },
    {
      id: 4,
      url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/darkknight.building.24x36_20e90057-f673-4cc3-9ce7-7b0d3eeb7d83_500x749.jpg?v=1707491191",
      title: "The Dark Knight",
    },
    {
      id: 5,
      url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/jurassicpark.mpw_500x749.jpg?v=1713805481",
      title: "Jurassic Park",
    },
    {
      id: 6,
      url: "https://www.movieposters.com/cdn/shop/files/inside_out_two_ver2_240x360_crop_center.progressive.jpg?v=1711998871",
      title: "Inside Out 2",
    },
    {
      id: 7,
      url: "https://www.movieposters.com/cdn/shop/files/scan005_88716d1d-c78c-4145-9a85-add125973445_240x360_crop_center.progressive.jpg?v=1716917116",
      title: "A Quiet Place Day One",
    },
    {
      id: 8,
      url: "https://www.movieposters.com/cdn/shop/files/twisters_ver2_240x360_crop_center.progressive.jpg?v=1716915045",
      title: "Twisters",
    },
    {
      id: 9,
      url: "https://www.movieposters.com/cdn/shop/files/despicable_me_four_ver2_240x360_crop_center.progressive.jpg?v=1715958127",
      title: "Despicable Me 4",
    },
    {
      id: 10,
      url: "https://www.movieposters.com/cdn/shop/products/c104f1bfed20481f35bc96cb9addc940_240x360_crop_center.progressive.jpg?v=1573588574",
      title: "Titanic",
    },
    {
      id: 11,
      url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/avatar-the-way-of-water_zou5uxd9_500x749.jpg?v=1704285772",
      title: "Avatar",
    },
    {
      id: 12,
      url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/38d442e56d5661600066a948eb17f5c1_de20fbfe-5673-486f-ba57-b876fa6e3ece_500x749.jpg?v=1716559041",
      title: "UnderWorld",
    },
    {
      id: 13,
      url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/deadpool-wolverine_3bxbce5r_500x749.jpg?v=1715286577",
      title: "Deadpool & Wolverine",
    },
    {
      id: 14,
      url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/transformers_one_500x749.jpg?v=1715264149",
      title: "Transformers One",
    },
    {
      id: 15,
      url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/toy-story-4_msthubyz_500x749.jpg?v=1716490777",
      title: "Toy Story 4",
    },
    {
      id: 16,
      url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/spider-man-far-from-home_hxconkmy_500x749.jpg?v=1716481475",
      title: "Spiderman: Far From Home",
    },
    {
      id: 17,
      url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/insurgent_ver12_500x749.jpg?v=1711040640",
      title: "Insurgent",
    },
    {
      id: 18,
      url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/help_500x749.jpg?v=1709665084",
      title: "Help",
    },
    {
      id: 19,
      url: "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/acd369d0dfac5a1df9810fd86ddc6096_54af05f8-88ed-42d6-8263-18f068150116_500x749.jpg?v=1709582081",
      title: "Hunger Games: Mockingjay",
    },
    {
      id: 20,
      url: "https://www.movieposters.com/cdn/shop/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab_240x360_crop_center.progressive.jpg?v=1573587596",
      title: "Matrix",
    },
    {
      id: 21,
      url: "https://www.movieposters.com/cdn/shop/products/captain-america-civil-war_dnivklxb_d2fff67e-2eb9-463a-93f1-419052bd402f_240x360_crop_center.progressive.jpg?v=1650397252",
      title: "Captain America Civil War",
    },
  ];

  function addToFavorite(id) {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites.includes(`${id}`)) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((favoriteId) => favoriteId !== `${id}`))
      );
    } else {
      localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
    }

    renderCards();
  }

  const galleryCards = document.getElementById("gallery-cards");

  function renderCards() {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    const galleryCardsHTML = gallery
      .map((movie) => {
        return {
          ...movie,
          isFavorite: favorites.includes(`${movie.id}`),
        };
      })
      .map(({ id, title, url, isFavorite }) => {
        const activeFavotire = `
        <svg
            id=${id}
            class="favorite-active"
            data-is-favorite="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style="z-index: 100"
        >
            <path
            id=${id}
            data-is-favorite="true"
            d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
            />
        </svg>
        `;
        const inactiveFavorite = `
        <svg
            id=${id}
            class="favorite-inactive"
            data-is-favorite="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style="z-index: 100"
        >
            <path
            id=${id}
            data-is-favorite="true"
            d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
            />
        </svg>
        `;
        const favoriteToRender = isFavorite ? activeFavotire : inactiveFavorite;

        return `
        <div class="cards">
            ${favoriteToRender}
            <img
                src="${url}"
                alt="${title}"
                width="300"
                height="400"
            />
            <span class="favorite-tag">${title}</span>
        </div>
        `;
      })
      .join("");

    galleryCards.innerHTML = galleryCardsHTML;
  }

  galleryCards.addEventListener("click", (e) => {
    if (!Boolean(e.target.dataset["isFavorite"])) return;

    addToFavorite(e.target.id);
  });

  renderCards();
});
