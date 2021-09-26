function paginate(items) {
  const itemsPerPage = 10
  const pages = Math.ceil(items.length / itemsPerPage)

  const newCats = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    return items.slice(start, start + itemsPerPage)
  })

  return newCats
}

export default paginate
