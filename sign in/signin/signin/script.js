let signUpButton = document.getElementById('signup');
let signInButton = document.getElementById('signIn');
let container = document.getElementById('container');
let letterElement = document.getElementById('forgot');


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

letterElement.addEventListener('click', function() 
{

	window.location.href = 'forgot/index.html';   
  
  setTimeout(function() {
  window.location.href = 'screen/index.html';
  }, 5000);


 });

 describe('Sign up and sign in buttons', () => {
  test('Clicking sign up button should add "right-panel-active" class to container', () => {
    const signUpButton = document.createElement('button');
    signUpButton.id = 'signup';
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(signUpButton);
    document.body.appendChild(container);

    const signUpClick = new Event('click');
    signUpButton.dispatchEvent(signUpClick);

    expect(container.classList).toContain('right-panel-active');
  });

  test('Clicking sign in button should remove "right-panel-active" class from container', () => {
    const signInButton = document.createElement('button');
    signInButton.id = 'signIn';
    const container = document.createElement('div');
    container.id = 'container';
    container.classList.add('right-panel-active');
    document.body.appendChild(signInButton);
    document.body.appendChild(container);

    const signInClick = new Event('click');
    signInButton.dispatchEvent(signInClick);

    expect(container.classList).not.toContain('right-panel-active');
  });
});

describe('Letter element', () => {
  test('Clicking letter element should redirect to "forgot/index.html" and then "screen/index.html"', () => {
    const letterElement = document.createElement('div');
    letterElement.id = 'forgot';
    document.body.appendChild(letterElement);

    const letterClick = new Event('click');
    letterElement.dispatchEvent(letterClick);

    jest.useFakeTimers();
    jest.advanceTimersByTime(5000);

    expect(window.location.href).toEqual('screen/index.html');
  });
});
describe('Sign up and sign in buttons', () => {
  let container;

  beforeEach(() => {
    const signUpButton = document.createElement('button');
    signUpButton.id = 'signup';
    const signInButton = document.createElement('button');
    signInButton.id = 'signIn';
    container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(signUpButton);
    document.body.appendChild(signInButton);
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('Clicking sign up button should add "right-panel-active" class to container', () => {
    const signUpClick = new Event('click');
    signUpButton.dispatchEvent(signUpClick);
    expect(container.classList).toContain('right-panel-active');
  });

  test('Clicking sign in button should remove "right-panel-active" class from container', () => {
    container.classList.add('right-panel-active');
    const signInClick = new Event('click');
    signInButton.dispatchEvent(signInClick);
    expect(container.classList).not.toContain('right-panel-active');
  });
});

describe('Letter element', () => {
  let letterElement;

  beforeEach(() => {
    letterElement = document.createElement('div');
    letterElement.id = 'forgot';
    document.body.appendChild(letterElement);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('Clicking letter element should redirect to "forgot/index.html" and then "screen/index.html"', () => {
    const letterClick = new Event('click');
    letterElement.dispatchEvent(letterClick);
    jest.useFakeTimers();
    jest.advanceTimersByTime(5000);
    expect(window.location.href).toEqual('screen/index.html');
  });
});
