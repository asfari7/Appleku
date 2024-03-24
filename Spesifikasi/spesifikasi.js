$(document).ready(function () {
  $('.search-button').on('click', function () {
    swal({
      title: '',
      text: 'Mencari Data...',
      icon: 'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif',
      button: false,
      timer: 1000,
    });
    $.ajax({
      url: 'data/iPhone.json',
      success: (iPhone) => {
        const cari = $('.input-keyword').val();
        if (cari == 'iPhone X') {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[0].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[0].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[0].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[0].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[0].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[0].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[0].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[0].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[0].kamera}</li>
                                  </ul>
                                </div>`;
          $('.spesifikasi').html(spesifikasi);
        } else if (cari == 'iPhone XS') {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[1].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[1].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[1].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[1].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[1].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[1].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[1].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[1].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[1].kamera}</li>
                                  </ul>
                                </div>`;
          $('.spesifikasi').html(spesifikasi);
        } else if (cari == 'iPhone XS Max') {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[2].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[2].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[2].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[2].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[2].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[2].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[2].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[2].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[2].kamera}</li>
                                  </ul>
                                </div>`;
          $('.spesifikasi').html(spesifikasi);
        } else if (cari == 'iPhone XR') {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[3].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[3].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[3].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[3].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[3].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[3].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[3].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[3].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[3].kamera}</li>
                                  </ul>
                                </div>`;
          $('.spesifikasi').html(spesifikasi);
        } else if (cari == 'iPhone 11') {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[4].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[4].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[4].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[4].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[4].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[4].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[4].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[4].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[4].kamera}</li>
                                  </ul>
                                </div>`;
          $('.spesifikasi').html(spesifikasi);
        } else if (cari == '') {
          return swal('', 'Mohon isi tipe iPhone terlebih dahulu', 'warning');
        }
      },
      error: (e) => {
        return swal('', `${e.responseText}`, 'warning');
      },
    });
  });
});
