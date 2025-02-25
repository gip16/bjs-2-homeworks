//Задача № 1

function cachingDecoratorNew(func) {
  let cache = [];

  return function(...args) {
    const hash = md5(args);
    const cacheObject = cache.find(obj => obj.hash === hash);
    if (cacheObject) {
      return `Из кэша: ${cacheObject.value}`;
    }
    const result = func(...args);
    cache.push({hash, value: result});
    if (cache.length > 5) {
      cache.shift();
    }
    return `Вычисляем: ${result}`;
  }
}

//Задача № 2

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;

    if (timeoutId === null) {
      wrapper.count++;
      timeoutId = 0;
      return func(...args);
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);
  }

  return wrapper;
}