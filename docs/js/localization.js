// ローカリゼーション設定
const translations = {
    ja: {
        // ヘッダー
        home: "ホーム",
        features: "機能",
        apps: "アプリ",
        contact: "お問い合わせ",
        
        // ヒーローセクション
        heroTitle: "Coin Galaxy",
        heroSubtitle: "日常生活をより便利にする革新的なアプリケーション群",
        exploreApps: "アプリを探索する",
        
        // 機能セクション
        whyCoinGalaxy: "なぜCoin Galaxyなのか？",
        bookkeeping: "家計管理",
        bookkeepingDesc: "直感的なスタンプ機能で、楽しく簡単に家計簿をつけることができます。",
        aiDevelopment: "AI支援開発",
        aiDevelopmentDesc: "AIの力を活用して、Flutter開発をより効率的で快適にします。",
        beautifulDesign: "美しいデザイン",
        beautifulDesignDesc: "使いやすさと美しさを両立した、モダンで洗練されたユーザーインターフェース。",
        mobileFirst: "モバイルファースト",
        mobileFirstDesc: "スマートフォンでの使用を最優先に設計された、快適なモバイル体験。",
        
        // アプリセクション
        ourApps: "私たちのアプリケーション",
        stampBookkeeping: "Stamp家計簿",
        stampBookkeepingDesc: "スタンプを押すような感覚で簡単に家計簿をつけることができるアプリ。視覚的で楽しい家計管理を実現します。",
        fditor: "Fditor - Flutter AI Editor",
        fditorDesc: "AI技術を活用したFlutter開発エディター。コード補完、エラー修正、最適化提案など、開発を強力にサポートします。",
        startNow: "今すぐ始める",
        
        // フッター
        companyDesc: "日常生活を豊かにするアプリケーションの開発",
        copyright: "© 2024 normidar. All rights reserved.",
        tagline: "Coin Galaxy - より便利で楽しい毎日を",
        
        // 言語選択
        language: "言語",
        japanese: "日本語",
        english: "English",
        chinese: "中文",
        
        // アプリ固有の翻訳
        backToHome: "← ホームに戻る",
        stampBookkeepingSubtitle: "スタンプを押すような感覚で、楽しく簡単に家計管理",
        mainFeatures: "主な機能",
        initialStamp: "初期Stamp作成",
        initialStampDesc: "最初に記帳する時にウォレットの残高で初期Stampを作成。簡単な設定で家計簿を始められます。",
        laterStamp: "後日Stamp追加",
        laterStampDesc: "記帳に怠けてしまった場合でも大丈夫。後日にその怠けたウォレットにStampを追加するだけで簡単に記録を更新できます。",
        simpleUI: "シンプルな画面",
        simpleUIDesc: "直感的で使いやすいシンプルなデザイン。複雑な操作は一切不要で、誰でも簡単に家計管理ができます。",
        multilingual: "多言語対応",
        multilingualDesc: "日本語、英語、中国語に対応。世界中のユーザーが自分の言語で快適に使用できます。",
        themeSelection: "テーマ選択",
        themeSelectionDesc: "お好みに合わせてテーマを選択可能。自分らしいカスタマイズで楽しく家計管理を続けられます。",
        completelyFree: "完全無料",
        completelyFreeDesc: "すべての機能が完全無料でご利用いただけます。追加課金や隠れた費用は一切ありません。",
        howToUse: "使い方",
        step1Title: "アプリを起動",
        step1Desc: "Stamp家計簿を開いて、今日の家計簿を始めましょう。",
        step2Title: "スタンプを選択",
        step2Desc: "食費、交通費、娯楽費など、カテゴリに応じたスタンプを選択します。",
        step3Title: "金額を入力",
        step3Desc: "支出した金額を入力して、スタンプを押すように記録完了。",
        step4Title: "分析を確認",
        step4Desc: "月末に支出の傾向や予算の達成状況を確認して、次月の計画を立てます。",
        screenshots: "スクリーンショット",
        mainScreen: "メイン画面",
        mainScreenDesc: "直感的なスタンプ入力画面",
        analysisScreen: "分析画面",
        analysisScreenDesc: "視覚的な支出分析とグラフ",
        budgetScreen: "予算管理",
        budgetScreenDesc: "月別予算設定と進捗確認",
        historyScreen: "履歴画面",
        historyScreenDesc: "過去の支出履歴と検索機能",
        downloadNow: "今すぐダウンロード",
        downloadMessage: "Stamp家計簿で、楽しく簡単な家計管理を始めませんか？",
        
        // Fditor固有の翻訳
        fditorSubtitle: "Flutter AI Editor - AI技術でFlutter開発を革新",
        aiFeatures: "AI支援機能",
        claudeIntegration: "Claude API連携",
        claudeIntegrationDesc: "Claudeのキーを入力すれば機能が使えるようになります。強力なAI技術をFlutter開発に活用できます。",
        inAppPreview: "アプリ内UI確認",
        inAppPreviewDesc: "生成されたUIをアプリ内で直接確認できます。コードの変更結果をリアルタイムで視覚的に確認しながら開発を進められます。",
        developmentEfficiency: "開発効率の向上",
        timeReduction: "開発時間短縮",
        timeReductionDesc: "最大70%の開発時間短縮を実現",
        bugReduction: "バグ削減",
        bugReductionDesc: "AIによる事前チェックでバグを80%削減",
        qualityImprovement: "品質向上",
        qualityImprovementDesc: "ベストプラクティスの自動適用",
        learningSupport: "学習支援",
        learningSupportDesc: "AIが開発パターンを教えて学習を促進",
        mainEditor: "メインエディター",
        mainEditorDesc: "AI支援付きコードエディター",
        aiAssistant: "AI アシスタント",
        aiAssistantDesc: "リアルタイムコード提案",
        performanceAnalysis: "パフォーマンス分析",
        performanceAnalysisDesc: "コード品質とパフォーマンス監視",
        uiDesigner: "UI デザイナー",
        uiDesignerDesc: "ビジュアルUIデザインツール",
        fditorDownloadMessage: "Fditorで、AI支援によるFlutter開発の新しい体験を始めませんか？"
    },
    en: {
        // Header
        home: "Home",
        features: "Features",
        apps: "Apps",
        contact: "Contact",
        
        // Hero section
        heroTitle: "Coin Galaxy",
        heroSubtitle: "Innovative applications that make daily life more convenient",
        exploreApps: "Explore Apps",
        
        // Features section
        whyCoinGalaxy: "Why Coin Galaxy?",
        bookkeeping: "Bookkeeping",
        bookkeepingDesc: "Intuitive stamp functionality for fun and easy bookkeeping. Visual and enjoyable household management.",
        aiDevelopment: "AI-Powered Development",
        aiDevelopmentDesc: "Leverage AI technology to make Flutter development more efficient and comfortable.",
        beautifulDesign: "Beautiful Design",
        beautifulDesignDesc: "Modern and sophisticated user interface that balances usability and beauty.",
        mobileFirst: "Mobile First",
        mobileFirstDesc: "Comfortable mobile experience designed with smartphone usage as the top priority.",
        
        // Apps section
        ourApps: "Our Applications",
        stampBookkeeping: "Stamp Bookkeeping",
        stampBookkeepingDesc: "An app that allows you to keep books easily with a stamp-like feeling. Achieves visual and enjoyable household management.",
        fditor: "Fditor - Flutter AI Editor",
        fditorDesc: "Flutter development editor powered by AI technology. Strongly supports development with code completion, error correction, and optimization suggestions.",
        startNow: "Get Started",
        
        // Footer
        companyDesc: "Development of applications that enrich daily life",
        copyright: "© 2024 normidar. All rights reserved.",
        tagline: "Coin Galaxy - More convenient and enjoyable everyday life",
        
        // Language selection
        language: "Language",
        japanese: "日本語",
        english: "English",
        chinese: "中文",
        
        // App-specific translations
        backToHome: "← Back to Home",
        stampBookkeepingSubtitle: "Fun and easy household management with a stamp-like feeling",
        mainFeatures: "Main Features",
        initialStamp: "Initial Stamp Creation",
        initialStampDesc: "Create initial stamps with wallet balance when first recording. Start bookkeeping with simple settings.",
        laterStamp: "Later Stamp Addition",
        laterStampDesc: "No problem if you get lazy with recording. Simply add stamps to the lazy wallet later to easily update records.",
        simpleUI: "Simple Interface",
        simpleUIDesc: "Intuitive and easy-to-use simple design. No complex operations required, anyone can easily manage household finances.",
        multilingual: "Multilingual Support",
        multilingualDesc: "Supports Japanese, English, and Chinese. Users worldwide can comfortably use it in their own language.",
        themeSelection: "Theme Selection",
        themeSelectionDesc: "Choose themes according to your preferences. Continue fun household management with your own customization.",
        completelyFree: "Completely Free",
        completelyFreeDesc: "All features are completely free to use. No additional charges or hidden costs.",
        howToUse: "How to Use",
        step1Title: "Launch App",
        step1Desc: "Open Stamp Bookkeeping and start today's bookkeeping.",
        step2Title: "Select Stamp",
        step2Desc: "Select stamps according to categories like food, transportation, entertainment expenses.",
        step3Title: "Enter Amount",
        step3Desc: "Enter the amount spent and complete recording like pressing a stamp.",
        step4Title: "Check Analysis",
        step4Desc: "Check spending trends and budget achievement at month-end to plan for next month.",
        screenshots: "Screenshots",
        mainScreen: "Main Screen",
        mainScreenDesc: "Intuitive stamp input screen",
        analysisScreen: "Analysis Screen",
        analysisScreenDesc: "Visual spending analysis and graphs",
        budgetScreen: "Budget Management",
        budgetScreenDesc: "Monthly budget settings and progress confirmation",
        historyScreen: "History Screen",
        historyScreenDesc: "Past spending history and search functions",
        downloadNow: "Download Now",
        downloadMessage: "Start fun and easy household management with Stamp Bookkeeping?",
        
        // Fditor-specific translations
        fditorSubtitle: "Flutter AI Editor - Revolutionizing Flutter development with AI technology",
        aiFeatures: "AI-Powered Features",
        claudeIntegration: "Claude API Integration",
        claudeIntegrationDesc: "Enter your Claude key to enable features. Leverage powerful AI technology for Flutter development.",
        inAppPreview: "In-App UI Preview",
        inAppPreviewDesc: "Preview generated UI directly in the app. Advance development while visually confirming code changes in real-time.",
        developmentEfficiency: "Development Efficiency Improvement",
        timeReduction: "Development Time Reduction",
        timeReductionDesc: "Achieve up to 70% development time reduction",
        bugReduction: "Bug Reduction",
        bugReductionDesc: "Reduce bugs by 80% with AI pre-check",
        qualityImprovement: "Quality Improvement",
        qualityImprovementDesc: "Automatic application of best practices",
        learningSupport: "Learning Support",
        learningSupportDesc: "AI teaches development patterns to promote learning",
        mainEditor: "Main Editor",
        mainEditorDesc: "AI-powered code editor",
        aiAssistant: "AI Assistant",
        aiAssistantDesc: "Real-time code suggestions",
        performanceAnalysis: "Performance Analysis",
        performanceAnalysisDesc: "Code quality and performance monitoring",
        uiDesigner: "UI Designer",
        uiDesignerDesc: "Visual UI design tools",
        fditorDownloadMessage: "Start a new Flutter development experience with AI support using Fditor?"
    },
    zh: {
        // ヘッダー
        home: "首页",
        features: "功能",
        apps: "应用",
        contact: "联系我们",
        
        // 英雄部分
        heroTitle: "Coin Galaxy",
        heroSubtitle: "让日常生活更便利的创新应用程序",
        exploreApps: "探索应用",
        
        // 功能部分
        whyCoinGalaxy: "为什么选择Coin Galaxy？",
        bookkeeping: "记账管理",
        bookkeepingDesc: "直观的印章功能，让记账变得有趣简单。实现视觉化且愉快的家庭管理。",
        aiDevelopment: "AI辅助开发",
        aiDevelopmentDesc: "利用AI技术，让Flutter开发更高效舒适。",
        beautifulDesign: "精美设计",
        beautifulDesignDesc: "平衡易用性和美观性的现代精致用户界面。",
        mobileFirst: "移动优先",
        mobileFirstDesc: "以智能手机使用为最高优先级设计的舒适移动体验。",
        
        // 应用部分
        ourApps: "我们的应用程序",
        stampBookkeeping: "印章记账",
        stampBookkeepingDesc: "可以像盖章一样简单记账的应用。实现视觉化且愉快的家庭管理。",
        fditor: "Fditor - Flutter AI编辑器",
        fditorDesc: "利用AI技术的Flutter开发编辑器。通过代码补全、错误修正、优化建议等强力支持开发。",
        startNow: "立即开始",
        
        // 页脚
        companyDesc: "开发丰富日常生活的应用程序",
        copyright: "© 2024 normidar. All rights reserved.",
        tagline: "Coin Galaxy - 更便利愉快的日常生活",
        
        // 语言选择
        language: "语言",
        japanese: "日本語",
        english: "English",
        chinese: "中文",
        
        // 应用特定翻译
        backToHome: "← 返回首页",
        stampBookkeepingSubtitle: "像盖章一样简单有趣的记账管理",
        mainFeatures: "主要功能",
        initialStamp: "初始印章创建",
        initialStampDesc: "首次记账时用钱包余额创建初始印章。简单设置即可开始记账。",
        laterStamp: "后日印章添加",
        laterStampDesc: "即使记账懈怠也没关系。后日只需向懈怠的钱包添加印章即可轻松更新记录。",
        simpleUI: "简洁界面",
        simpleUIDesc: "直观易用的简洁设计。无需复杂操作，任何人都能轻松管理家庭财务。",
        multilingual: "多语言支持",
        multilingualDesc: "支持日语、英语、中文。全球用户都能用自己的语言舒适使用。",
        themeSelection: "主题选择",
        themeSelectionDesc: "根据喜好选择主题。用自己独特的定制继续有趣的记账管理。",
        completelyFree: "完全免费",
        completelyFreeDesc: "所有功能完全免费使用。无额外收费或隐藏费用。",
        howToUse: "使用方法",
        step1Title: "启动应用",
        step1Desc: "打开印章记账，开始今天的记账。",
        step2Title: "选择印章",
        step2Desc: "选择餐饮、交通、娱乐等类别的印章。",
        step3Title: "输入金额",
        step3Desc: "输入支出金额，像盖章一样完成记录。",
        step4Title: "查看分析",
        step4Desc: "月末查看支出趋势和预算达成情况，制定下月计划。",
        screenshots: "截图",
        mainScreen: "主界面",
        mainScreenDesc: "直观的印章输入界面",
        analysisScreen: "分析界面",
        analysisScreenDesc: "可视化支出分析和图表",
        budgetScreen: "预算管理",
        budgetScreenDesc: "月度预算设置和进度确认",
        historyScreen: "历史界面",
        historyScreenDesc: "过往支出历史和搜索功能",
        downloadNow: "立即下载",
        downloadMessage: "用印章记账开始有趣简单的记账管理？",
        
        // Fditor特定翻译
        fditorSubtitle: "Flutter AI编辑器 - 用AI技术革新Flutter开发",
        aiFeatures: "AI辅助功能",
        claudeIntegration: "Claude API集成",
        claudeIntegrationDesc: "输入Claude密钥即可启用功能。将强大的AI技术应用于Flutter开发。",
        inAppPreview: "应用内UI预览",
        inAppPreviewDesc: "直接在应用中预览生成的UI。实时视觉确认代码变更结果的同时推进开发。",
        developmentEfficiency: "开发效率提升",
        timeReduction: "开发时间缩短",
        timeReductionDesc: "实现最多70%的开发时间缩短",
        bugReduction: "错误减少",
        bugReductionDesc: "AI预检查将错误减少80%",
        qualityImprovement: "质量提升",
        qualityImprovementDesc: "自动应用最佳实践",
        learningSupport: "学习支持",
        learningSupportDesc: "AI教授开发模式促进学习",
        mainEditor: "主编辑器",
        mainEditorDesc: "AI辅助代码编辑器",
        aiAssistant: "AI助手",
        aiAssistantDesc: "实时代码建议",
        performanceAnalysis: "性能分析",
        performanceAnalysisDesc: "代码质量和性能监控",
        uiDesigner: "UI设计器",
        uiDesignerDesc: "可视化UI设计工具",
        fditorDownloadMessage: "用Fditor开始AI辅助Flutter开发的新体验？"
    }
};

// 現在の言語を取得（デフォルトは英語）
let currentLanguage = localStorage.getItem('language') || 'en';

// 言語を変更する関数
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateContent();
}

// コンテンツを更新する関数
function updateContent() {
    const t = translations[currentLanguage];
    
    // ヘッダー
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // 言語選択ボタンのアクティブ状態を更新
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', function() {
    updateContent();
}); 