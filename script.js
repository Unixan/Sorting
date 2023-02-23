function updateView() {
  model.filteredList = [];
  checkChecked();
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
  html += filters();
  model.filteredList.forEach((picture) => {
    html += /*HTML*/ `
    <div> ${picture.title}</div>
    `;

    document.getElementById("app").innerHTML = html;
  });
}

function filters() {
  let filter = "";
  model.filterCats.forEach((cat, index) => {
    filter += /*HTML*/ `
    <div>${cat.cat}</div><input type="checkbox" ${
      cat.checked ? "checked" : ""
    } oninput="model.filterCats[${index}].checked = !model.filterCats[${index}].checked; updateView()" />
    `;
  });

  return filter;
}

function checkChecked() {
  model.filter = [];
  model.filterCats.forEach((cat) => {
    category = cat.cat;
    checkBox = cat.checked;
    if (checkBox) {
      model.filter.push(category);
    }
  });
  console.log(model.filter);
}
