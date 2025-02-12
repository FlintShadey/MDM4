export function getStorageKeyForToday() {
  const today = new Date();
  return `patientCount_${today.toISOString().split('T')[0]}`;
}

export function getTodayCount() {
  const key = getStorageKeyForToday();
  return parseInt(localStorage.getItem(key) || '0');
}

export function incrementTodayCount() {
  const key = getStorageKeyForToday();
  const currentCount = getTodayCount();
  localStorage.setItem(key, (currentCount + 1).toString());
  return currentCount + 1;
}

// Clean up old counts (optional, can be called periodically)
export function cleanupOldCounts() {
  const today = new Date().toISOString().split('T')[0];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('patientCount_') && !key.includes(today)) {
      localStorage.removeItem(key);
    }
  }
}