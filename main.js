function kiemTra() {
    let hoten = document.frmDangKy.HoTen.value;
    let email = document.frmDangKy.email.value;
    let sdt = document.frmDangKy.sdt.value;
    let chonnuoc = document.frmDangKy.chonNuoc.value;
    let chonkhoahoc = document.frmDangKy.chonKhoahoc.value;
    let diachi = document.frmDangKy.diaChi.value;
    if (hoten == '') {
        alert('Hộ tên không được để trống');
        document.frmDangKy.HoTen.focus();
        return false;
    }
    if (email == '') {
        alert('Địa chỉ email không được để trống');
        document.frmDangKy.email.focus();
        return false;
    }
    if (sdt == '') {
        alert('Số điện thoại không được để trống');
        document.frmDangKy.sdt.focus();
        return false;
    }
    else if (sdt.length <= 9) {
        alert('Vui lòng nhập đúng số điện thoại');
        document.frmDangKy.sdt.focus();
        return false;
    }
    if (chonnuoc == 'chonNuoc') {
        alert('Vui lòng chọn nước');
        return false;
    }
    if (chonkhoahoc == 'chonKhoahoc') {
        alert('Vui lòng chọn khoá học');
        return false;
    }
    if (diachi == '') {
        alert('Địa chỉ không được để trống');
        document.frmDangKy.diaChi.focus();
        return false;
    }
    alert('Chúc mừng bạn đã đăng ký khoá học online thành công!')
    thongTin = '<h1>THÔNG TIN ĐĂNG KÝ</h1>' +
        '<p><b>Họ và tên:</b> ' + hoten + '</p>' +
        '<p><b>Địa chỉ Email:</b> ' + email + '</p>' +
        '<p><b>Số điện thoại:</b> ' + sdt + '</p>' +
        '<p><b>Nước:</b> ' + chonnuoc + "          <b>Khoá học:</b>" + chonkhoahoc + '</p>' +
        '<p><b>Địa chỉ:</b> ' + diachi + '</p>';
    document.getElementById('hienThongTin').innerHTML = thongTin;


}
function Huy() {
    location.reload(true);
}