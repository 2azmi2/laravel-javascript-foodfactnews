@extends('style.style')

@section('isi')
    <div id="root" link="{{ json_encode("about") }}"></div>
    <script src="{{ mix('js/app.js') }}"></script>
@endsection