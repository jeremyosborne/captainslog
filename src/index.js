//
// Application seed file.
// Dynamic imports load chunks after initial page load.
//

// Dynamic import imports like * as blah... ?
import('./main').then((main) => {
  main.main()
})
