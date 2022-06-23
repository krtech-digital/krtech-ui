// Mocked data 
const records = [
    ...Array(150)
      .fill("")
      .map((val, index) => `Item ${Math.abs(val - index)}`)
  ];


// Paginator klasa
class Paginator {
  itemsPerPage;
  totalRecords;
  numberOfPages;
  visiblePages;
  activePage;
  visiblePagesEndRange;
  constructor(totalRecords, recordsPerPage = 1, visiblePages = 1) {
    this.itemsPerPage = recordsPerPage;
    this.totalRecords = totalRecords;
    this.numberOfPages = Math.ceil(this.totalRecords / this.itemsPerPage);
    this.visiblePages = visiblePages;
    this.activePage = 1;
    this.visiblePagesEndRange = visiblePages;
  }
  
  getActivePage() {
    return this.activePage;
  }
  
  gotoNextPage() {
    if (this.activePage < this.numberOfPages) {
      this.activePage += 1;

      if (this.activePage > this.visiblePagesEndRange) {
        this.visiblePagesEndRange += this.visiblePages;
        this.visiblePagesEndRange = Math.min(this.visiblePagesEndRange, this.numberOfPages);
      }
    }
  }

  gotoPrevPage() {
    if (this.activePage > 1) {
      this.activePage -= 1;
      if (this.activePage % this.visiblePages === 0) {
        this.visiblePagesEndRange = this.activePage;
      }
    }
  }

  gotoPage(page) {
    this.activePage = page;
  }

  // metoda za izracun rangea stranica koje ce se renderati
  getVisiblePagesRange() {
    let beginningVisiblePage;
    let endingVisiblePage;
    // kad visiblepagesendrange % visiblepages nije 0 (sto znaci da ne mogu sve stranice stati u range vidljivih stranica) tad je pocetak jednak visible page range - ((visible page range % visiblepage range) - 1)
    if (this.visiblePagesEndRange % this.visiblePages !== 0) {
      beginningVisiblePage =
this.visiblePagesEndRange - (this.visiblePagesEndRange % this.visiblePages) + 1;
    }
    //else uvijek smo na mjestu gdje nam current visible page end range - visible page range + 1 vraca tocnu pocetnu poziciju za range stranica koje prikazujemo
    else {
      beginningVisiblePage = this.visiblePagesEndRange - this.visiblePages + 1;
    }
    // takoder endingActivePage je jednostavno jednak visiblePagesEndRange
    endingVisiblePage = this.visiblePagesEndRange;
    return {
      beginningVisiblePage,
      endingVisiblePage
    };
  }

  getActiveRecordsIndices() {
    // index početne stranice je trenutna aktivna stranica pomnozena brojem itema iz liste
    let beginningRecordIndex = (this.activePage - 1) * this.itemsPerPage;
    // index zavrsne stranice bude minimum svih itema iz liste i (index početnog itema + broj dozvoljenih itema na jednoj stranici)
    let endingRecordIndex = Math.min(
      beginningRecordIndex + this.itemsPerPage,
      this.totalRecords
    );
    return { beginningRecordIndex, endingRecordIndex };
  }
}

// Glavne funkcije stranice (renderiranje i koristenje Paginator klase)
(function () {
  function nextPage() {
    paginator.gotoNextPage();
    render();
  }

  function prevPage() {
    paginator.gotoPrevPage();
    render();
  }

  // Prosljedivanje eventa u ul (unurdered list)
  function gotoPage(event) {
    if (event.target.nodeName === "BUTTON") {
      const page = parseInt(event.target.dataset.item);
      paginator.gotoPage(page);
      render();
    }
  }

  const paginationPages = document.querySelector(".paginationPages");

  paginationPages.addEventListener("click", gotoPage);

  /* paginator objekt 
  lista itema
  recordsPerPage = 6
  visiblePages = 6  
  */
  const paginator = new Paginator(records.length, 5, 9);

  // funkcija za renderiranje buttona za paginaciju
  function renderPages() {
    const paginationPages = document.querySelector(".paginationPages");
    let html = "";
    let {
      beginningVisiblePage,
      endingVisiblePage
    } = paginator.getVisiblePagesRange();
    for (let page = beginningVisiblePage; page <= endingVisiblePage; page++) {
      const pageClass =
        paginator.getActivePage() === page
          ? "customButtonActive"
          : "customButton";
      html += `<li class='paginationPage'>
   <button data-item=${page} class=${pageClass}>${page}</button>
     </li>`;
    }
    paginationPages.innerHTML = html;
  }

  // metoda za renderiranje liste itema
  function renderList() {
    const list = document.querySelector(".list");
    const {
      beginningRecordIndex,
      endingRecordIndex
    } = paginator.getActiveRecordsIndices();
    let html = "";
    for (let index = beginningRecordIndex; index < endingRecordIndex; index++) {
      html += `<li class='listItem'>${records[index]}</li>`;
    }
    list.innerHTML = html;
  }

  // glavna render funkcija koja se zove na svaki novi klik buttona (ln 90, 95, 103...)
  function render() {
    renderPages();
    renderList();
  }

  render();

  this.nextPage = nextPage;
  this.prevPage = prevPage;
  this.gotoPage = gotoPage;
})();