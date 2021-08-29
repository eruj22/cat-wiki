import React from "react"
import Footer from "./Footer"
import image2 from "../assets/image2.png"

function Article() {
  return (
    <>
      <article className="article">
        <h1>Top 5 Reasons You Should Have a Cat</h1>
        <img src={image2} alt="" />
        <p className="italic">
          Cats are one of the best pets you can get. If you are hesitant to take
          on the responsibility of owning a pet, you might want to look again at
          the benefits of having a cat. They are sweet, quiet and independent,
          and hearing a cat’s purr can melt your heart. Here are the top five
          reasons you should own a cat.
        </p>
        <h2>1. Cats can bathe themselves</h2>
        <p>
          Cats are clean pretty much 100 percent of the time. That means you
          never have to take the time out of your day to perform the somewhat
          painstaking task of washing and grooming your cat.
        </p>
        <h2>2. Cats will keep your house and yard rodent-free</h2>
        <p>
          If you are not a fan of rats, chipmunk, voles or mice in your home,
          owning a cat will take care of that right away. Your cat may even
          bring you its prize to make you proud!
        </p>
        <h2>3. Cats are low-maintenance and independent</h2>
        <p>
          If you think you do not have the time or energy to own a pet, then a
          cat could be perfect for you. Taking care of a cat requires less
          responsibility than some other animals. Those who have full-time jobs
          can rest easy, knowing that their kitty can take care of itself for
          the most part. And when you do have extra time, cuddling up with your
          cat will feel better than ever.
        </p>
        <h2>4. Cats are an eco-friendly pet choice</h2>
        <p>
          Living a “green” lifestyle can be difficult, but a cat is a great
          choice for potential pet owners looking to stay eco-friendly. Studies
          show that the lifetime resources needed to feed and care for a cat
          have a smaller carbon footprint than for other animals. Plus, most
          cats prefer fish to beef or corn, which is better for the environment.
          You can feel good about owning your kitty.
        </p>
        <h2>5. Cats can help reduce stress</h2>
        <p>
          We all get stressed out, and people have many different ways of
          relieving their stress. Cat owners can reduce tensions by just
          stroking their furry friend’s head. Petting a cat releases endorphins
          into the brain, which makes you happier. Also, cats have the softest
          fur!
        </p>
        <p>
          There are so many more reasons that you should get a cat to fill your
          home with love. Check out your local shelter to find a kitty that
          really needs a home.
        </p>
        <p>
          Article is copied from{" "}
          <a
            href="https://animalkind.org/blog/top-5-reasons-cat/"
            target="_blank"
            rel="noreferrer"
          >
            AnimalKind
          </a>{" "}
          and all rights goes to them.
        </p>
      </article>

      <Footer />
    </>
  )
}

export default Article
