function updateView() {
  model.filteredList = [];
  if (model.filter.length === 0) {
    model.filteredList = model.pictures;
  } else {
    model.pictures.forEach((picture) => {
      let picCats = picture.category;
      picCats.forEach((cat) => {
        category = cat;
        model.filter.forEach((filterCat) => {
          if (cat === filterCat) {
            if (!model.filteredList.includes(picture)) {
              model.filteredList.push(picture);
              console.log("match");
            }
          }
        });
      });
    });
  }
  html = "";
  model.filteredList.forEach((picture) => {
    html += /*HTML*/ `
    <div> ${picture.title}</div>
    `;

    document.getElementById("app").innerHTML = html;
  });
}
