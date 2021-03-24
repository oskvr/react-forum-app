export function getFormattedDate(date) {
  if (!date) return;
  const commentDate = new Date(date);
  const today = new Date();
  if (commentDate.getDate() === today.getDate()) {
    return `Idag, ${commentDate.toLocaleString('sv-SE', {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  } else if (commentDate.getDate() === today.getDate() - 1) {
    return `Igår, ${commentDate.toLocaleString('sv-SE', {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  } else {
    return commentDate.toLocaleString('sv-SE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
