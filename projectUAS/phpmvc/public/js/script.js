$(function(){
    $('.tombolTambahData').on('click', function(){ //ketika tombol tambah diklik
        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');
    });



    $('.tampilModalUbah').on('click', function(){ //ketika tombol ubah diklik
        $('#formModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action', 'http://localhost/projectUAS/phpmvc/public/mahasiswa/ubah'); //mengubah action form

        const id = $(this).data('id'); //mengambil data id dari tombol ubah 
        
        $.ajax({ //menggunakan ajax
            url: 'http://localhost/projectUAS/phpmvc/public/mahasiswa/getubah', //mengirimkan data ke url
            data: {id  : id}, //mengirimkan data id ke url
            method: 'post', //menggunakan method post
            dataType: 'json', //menggunakan data json
            success: function(data){ //jika berhasil
                $('#nama').val(data.nama); //mengambil data nama dari data json
                $('#nrp').val(data.nrp); //mengambil data nrp dari data json
                $('#email').val(data.email); //mengambil data email dari data json
                $('#jurusan').val(data.jurusan); //mengambil data jurusan dari data json
                $('#id').val(data.id); //mengambil data id dari data json
            }
        }); 
    });   
});