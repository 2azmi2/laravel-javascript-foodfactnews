@extends('style.style')

@section('isi')
    <div id="root" data="{{ json_encode($data) }}" link="{{ json_encode("food") }}"></div>
    <script src="{{ mix('js/app.js') }}"></script>
@endsection
