// 目次を最初のh2の前に挿入する機能
(function() {
  function moveTocBeforeFirstH2() {
    const toc = document.getElementById('blogTocBeforeFirstH2');
    if (!toc) return;
    
    const blogContentBody = document.querySelector('.blog-content-body');
    if (!blogContentBody) return;
    
    // 最初のh2要素を探す
    const firstH2 = blogContentBody.querySelector('h2');
    if (!firstH2) {
      // h2が見つからない場合は、本文の最初に挿入
      blogContentBody.insertBefore(toc, blogContentBody.firstChild);
    } else {
      // 最初のh2の前に挿入
      firstH2.parentNode.insertBefore(toc, firstH2);
    }
    
    // 目次を表示
    toc.style.display = 'block';
  }
  
  // DOMContentLoaded後に実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(moveTocBeforeFirstH2, 100);
    });
  } else {
    setTimeout(moveTocBeforeFirstH2, 100);
  }
})();

// Xの埋め込みを初期化する前に、data-width属性を設定
(function() {
  function setupXEmbeds() {
    const blogContentBody = document.querySelector('.blog-content-body');
    if (!blogContentBody) {
      return;
    }
    
    // ウィジェットが読み込まれる前に、既存の埋め込みにdata-width属性を追加
    const existingEmbeds = blogContentBody.querySelectorAll('blockquote.twitter-tweet');
    existingEmbeds.forEach(embed => {
      if (!embed.hasAttribute('data-width')) {
        embed.setAttribute('data-width', '500'); // 埋め込みの幅を500pxに設定
      }
    });
  }
  
  // 即座に実行（ウィジェットスクリプトが読み込まれる前）
  setupXEmbeds();
  
  // DOMContentLoaded時にも実行（念のため）
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupXEmbeds);
  }
})();

// Xのリンクを埋め込みに変換
(function() {
  function convertXLinksToEmbeds() {
    const blogContentBody = document.querySelector('.blog-content-body');
    if (!blogContentBody) {
      console.error('Blog content body not found');
      return;
    }
    
    // XのURLパターン（x.com または twitter.com、status IDを含む）
    const xUrlPattern = /https?:\/\/(x\.com|twitter\.com)\/([\w]+)\/status\/(\d+)/;
    
    // すでに埋め込み済みのblockquoteがある場合
    const existingEmbeds = blogContentBody.querySelectorAll('blockquote.twitter-tweet');
    if (existingEmbeds.length > 0) {
      // 既存の埋め込みを読み込む
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(blogContentBody);
      }
      return;
    }
    
    // すべてのリンクを検索
    const links = blogContentBody.querySelectorAll('a');
    const processedLinks = new Set();
    
    links.forEach(link => {
      // すでに処理済みのリンクはスキップ
      if (processedLinks.has(link)) return;
      
      // すでにblockquote.twitter-tweet内のリンクはスキップ
      if (link.closest('blockquote.twitter-tweet')) {
        return;
      }
      
      const href = link.getAttribute('href');
      if (!href) return;
      
      const match = href.match(xUrlPattern);
      if (match) {
        // リンクの親要素を取得
        const parent = link.parentNode;
        if (!parent) return;
        
        // 埋め込みブロックを作成
        const blockquote = document.createElement('blockquote');
        blockquote.className = 'twitter-tweet';
        blockquote.setAttribute('data-theme', 'light');
        blockquote.setAttribute('data-dnt', 'true');
        blockquote.setAttribute('data-width', '500'); // 埋め込みの幅を500pxに設定
        
        const tweetLink = document.createElement('a');
        tweetLink.href = href;
        tweetLink.textContent = href;
        tweetLink.setAttribute('target', '_blank');
        tweetLink.setAttribute('rel', 'noopener noreferrer');
        blockquote.appendChild(tweetLink);
        
        // 親要素が<p>で、その中身がリンクのみ（またはリンクと空白のみ）の場合
        if (parent.tagName === 'P') {
          const parentText = parent.textContent.trim();
          const linkText = link.textContent.trim();
          // 段落全体がリンクのみ、またはURLのみの場合
          if (parentText === href || parentText === linkText || parent.children.length === 1) {
            // 段落全体を置き換え
            parent.replaceWith(blockquote);
            processedLinks.add(link);
          } else {
            // リンクのみを置き換え
            link.replaceWith(blockquote);
            processedLinks.add(link);
          }
        } else {
          // リンクのみを置き換え
          link.replaceWith(blockquote);
          processedLinks.add(link);
        }
      } else {
        // 外部リンク（httpまたはhttpsで始まる）は新しいタブで開くように設定
        if (href.startsWith('http://') || href.startsWith('https://')) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      }
    });
    
    // Xのウィジェットスクリプトが読み込まれたら、埋め込みを初期化
    function initTwitterWidgets() {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(blogContentBody);
        console.log('Twitter widgets initialized');
      } else {
        console.log('Waiting for Twitter widgets script...');
      }
    }
    
    // 即座に試行
    initTwitterWidgets();
    
    // スクリプトがまだ読み込まれていない場合は、読み込みを待つ
    let checkCount = 0;
    const maxChecks = 100; // 10秒（100ms × 100回）
    const checkTwttr = setInterval(() => {
      checkCount++;
      if (window.twttr && window.twttr.widgets) {
        initTwitterWidgets();
        clearInterval(checkTwttr);
      } else if (checkCount >= maxChecks) {
        clearInterval(checkTwttr);
        console.warn('Twitter widgets script failed to load after 10 seconds');
      }
    }, 100);
  }
  
  // DOMContentLoadedを待つ、または即座に実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(convertXLinksToEmbeds, 300);
    });
  } else {
    // すでに読み込み済みの場合は少し待ってから実行（Markdownのレンダリングを待つ）
    setTimeout(convertXLinksToEmbeds, 500);
  }
})();

// 見出しへのID付与と目次リンクのスムーススクロール設定、画像の処理
(function() {
  function processContent() {
    const blogContentBody = document.querySelector('.blog-content-body');
    if (!blogContentBody) return;
    
    // data-headings属性から見出し情報を取得
    const headingsDataAttr = blogContentBody.getAttribute('data-headings');
    let headingsData = [];
    try {
      headingsData = headingsDataAttr ? JSON.parse(headingsDataAttr) : [];
    } catch (e) {
      console.error('Failed to parse headings data:', e);
    }
    
    // 見出しにIDを付与
    const headings = blogContentBody.querySelectorAll('h2, h3');
    headings.forEach((heading, index) => {
      // 既にIDが付与されている場合はスキップ
      if (heading.id) return;
      
      const text = heading.textContent || '';
      // headingsDataから該当する見出しを探す（テキストが一致するもの）
      const matchingHeading = headingsData.find((h) => {
        const headingText = text.trim();
        const hText = h.text.trim();
        // 完全一致、または空白を除いて比較
        return headingText === hText || 
               headingText.replace(/\s+/g, ' ') === hText.replace(/\s+/g, ' ') ||
               headingText.toLowerCase() === hText.toLowerCase();
      });
      
      let targetId = null;
      if (matchingHeading) {
        targetId = matchingHeading.id;
      } else {
        // 一致する見出しがない場合は、テキストからIDを生成
        targetId = text.toLowerCase()
          .replace(/[^a-z0-9\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+/g, '-')
          .replace(/^-|-$/g, '') || `heading-${index}`;
      }
      
      if (targetId) {
        heading.id = targetId;
      }
    });
    
    // Markdown内の画像リンクを画像要素に変換
    // 画像パス（/assets/で始まる）を持つリンクを画像に変換
    const imageLinks = blogContentBody.querySelectorAll('a[href^="/assets/images/"], a[href^="./"], a[href*=".webp"], a[href*=".png"], a[href*=".jpg"], a[href*=".jpeg"]');
    imageLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      
      // リンクの中身が画像パスのみ、またはaltテキストのみの場合
      const linkText = link.textContent?.trim() || '';
      const isImageLink = href.match(/\.(webp|png|jpg|jpeg|gif|svg)$/i) || 
                         (linkText && link.children.length === 0);
      
      if (isImageLink) {
        // リンクを画像要素に変換
        const img = document.createElement('img');
        img.src = href.startsWith('./') ? href.replace('./', '/assets/images/blogs/') : href;
        img.alt = linkText || link.getAttribute('title') || '画像';
        img.className = 'markdown-image';
        img.loading = 'lazy'; // 遅延読み込み
        
        // 親要素が<p>の場合、段落ごと置き換え
        const parent = link.parentElement;
        if (parent && parent.tagName === 'P' && parent.children.length === 1) {
          parent.replaceWith(img);
        } else {
          link.replaceWith(img);
        }
      }
    });
    
    // 目次リンクのスムーススクロール設定
    const tocLinks = document.querySelectorAll('.blog-toc .toc-link');
    tocLinks.forEach(link => {
      // 既にイベントリスナーが設定されている場合はスキップ
      if (link.__tocClickHandler) return;
      
      const clickHandler = (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const targetId = href.substring(1);
          const target = document.getElementById(targetId);
          if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      };
      
      link.addEventListener('click', clickHandler);
      link.__tocClickHandler = clickHandler;
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(processContent, 300);
    });
  } else {
    setTimeout(processContent, 300);
  }
})();

// 目次の開閉機能
(function() {
  function initTocAccordion() {
    const tocAccordionButtons = document.querySelectorAll('.blog-toc-accordion');
    
    tocAccordionButtons.forEach(button => {
      // 既にイベントリスナーが設定されている場合はスキップ
      if (button.__tocAccordionHandler) return;
      
      const clickHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const tocNav = button.closest('.blog-toc');
        if (!tocNav) return;
        
        // is-openクラスの切り替え
        const isOpen = tocNav.classList.contains('is-open');
        
        if (isOpen) {
          tocNav.classList.remove('is-open');
          button.setAttribute('aria-expanded', 'false');
        } else {
          tocNav.classList.add('is-open');
          button.setAttribute('aria-expanded', 'true');
        }
      };
      
      button.addEventListener('click', clickHandler);
      button.__tocAccordionHandler = clickHandler;
      
      // 初期状態を設定
      const tocNav = button.closest('.blog-toc');
      if (tocNav) {
        // デフォルトで開いた状態にする
        tocNav.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initTocAccordion, 100);
    });
  } else {
    setTimeout(initTocAccordion, 100);
  }
})();

// リンクコピー機能
(function() {
  const copyLinkButton = document.getElementById('copyLinkButton');
  if (!copyLinkButton) return;

  copyLinkButton.addEventListener('click', async () => {
    const url = window.location.href;
    
    try {
      await navigator.clipboard.writeText(url);
      
      // ボタンのテキストを一時的に変更
      const originalText = copyLinkButton.querySelector('span');
      if (originalText) {
        const originalContent = originalText.textContent;
        originalText.textContent = 'コピーしました！';
        copyLinkButton.classList.add('copied');
        
        setTimeout(() => {
          originalText.textContent = originalContent;
          copyLinkButton.classList.remove('copied');
        }, 2000);
      }
    } catch (err) {
      // フォールバック: 古いブラウザ対応
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      
      try {
        document.execCommand('copy');
        const originalText = copyLinkButton.querySelector('span');
        if (originalText) {
          const originalContent = originalText.textContent;
          originalText.textContent = 'コピーしました！';
          copyLinkButton.classList.add('copied');
          
          setTimeout(() => {
            originalText.textContent = originalContent;
            copyLinkButton.classList.remove('copied');
          }, 2000);
        }
      } catch (err) {
        alert('リンクのコピーに失敗しました');
      }
      
      document.body.removeChild(textArea);
    }
  });
})();
