export function SmartText({ text }: { text: string | undefined }) {
  if (!text) return;
  // Регулярка: ищет все <...> где есть =
  const pattern = /<([^=<>]+)=([^<>]+)>/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  // Ищем все совпадения
  while ((match = pattern.exec(text)) !== null) {
    const [full, linkText, linkHref] = match;

    // Добавляем обычный текст ДО ссылки
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Добавляем саму ссылку
    parts.push(
      <a
        key={match.index}
        href={linkHref.trim()}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        {linkText.trim()}
      </a>
    );

    lastIndex = match.index + full.length;
  }

  // Добавляем остаток текста
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
