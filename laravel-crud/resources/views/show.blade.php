@extends('layouts.default')

@section('content')
    <section>
        <div class="container mt-5">
            <h1>Edit Data Mahasiswa</h1>
            <div class="row">
                <div class="col-lg-8">
                    <form action="{{url('/update/'.$data->id)}}" method="POST" enctype="multpart/form-data">
                        @csrf
                        <div class="form-group">
                            <label for="nama">Nama Mahasiswa *</label>
                            <input type="text" name="nama" class="form-control" placeholder="Masukkan Nama Anda" value="{{$data->nama}}">
                        </div>

                        <div class="form-group">
                            <label for="nama">NIM *</label>
                            <input type="number" name="nim" class="form-control" placeholder="Masukkan Nim Anda" value="{{$data->nim}}">
                        </div>

                        <div class="form-group">
                            <label for="nama">Alamat *</label>
                            <textarea class="form-control" name="alamat" placeholder="Masukkan Alamat Anda" >{{$data->alamat}}</textarea>
                        </div>

                        <div class="form-group mt-2">
                            <button type="submit" class="btn btn-primary">Update Data Mahasiswa</button>
                        </div>

                        <div class="form-group mt-2">
                            <a href="{{url('/')}}">Kembali ke Home</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>