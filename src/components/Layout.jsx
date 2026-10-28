// Layout is the part of the page that stays the same on every route.

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <span className="logo">ValleyEats</span>
        <nav>
          <a href="/">Restaurants</a>
          <a href="/about">About</a>
        </nav>
      </header>
      <main>
        {/* Part 3: the current page should show up here */}
      </main>
    </>
  )
}
