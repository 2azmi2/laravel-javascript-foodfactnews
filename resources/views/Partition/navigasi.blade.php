<div class="navigasi">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="navbar-brand" href="/">Food Fact News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ ($title === "Home") ? 'active' : '' }}" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ ($title === "Food") ? 'active' : '' }}" href="/food">Food News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{ ($title === "AboutUs") ? 'active' : '' }}" href="/about">About Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>