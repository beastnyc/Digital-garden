---
title: Creating Your First Note
description: Learn how to add new content to your digital garden
---

# Creating Your First Note

Adding new content to your digital garden is simple. Here's how to get started:

## File Structure

Place your Markdown files in the appropriate directory:

```
src/content/docs/
├── guides/
│   └── example.md
├── introduction.md
└── installation.md
```

## Markdown Formatting

Your notes support full Markdown syntax:

### Text Formatting

- **Bold** text using `**double asterisks**`
- *Italic* text using `*single asterisks*`
- `Code` using backticks

### Code Blocks

```python
def hello_garden():
    print("Welcome to my digital garden!")
```

### Links and Images

- Link to other notes using relative paths: `[Installation Guide](/installation)`
- Add images: `![Alt text](/path/to/image.png)`

## Frontmatter

Each note should start with frontmatter:

```yaml
---
title: Your Note Title
description: A brief description of your note
---
```

## Tips for Growing Your Garden

1. Start small and expand gradually
2. Update and refine notes over time
3. Create connections between related notes
4. Don't aim for perfection - gardens grow naturally

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
