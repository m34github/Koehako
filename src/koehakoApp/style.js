const common = {
  wiredIcon: {
    '--wired-icon-bg-color': '#fff'
  }
};

const home = {
  card: {
    background: '#fff',
    padding: 12,
    width: '90%'
  },
  cardSection: {
    padding: 12
  },
  date: {
    padding: 12
  },
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '12px 12px 6px 12px'
  },
  input: {
    width: '100%'
  },
  inputSection: {
    width: '65%'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0px 6px 24px 6px'
  },
  sender: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Tanuki',
    padding: 6
  }
};

const loader = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: window.innerHeight,
    width: window.innerWidth
  }
};

export { common, home, loader };
