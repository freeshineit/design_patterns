// 抽象工厂模式

// 信件
abstract class Letter {
  abstract content: string;
  abstract postmark: string;
}
// 简历
abstract class Resume {
  abstract content: string;
}

class FancyLetter extends Letter {
  content = "花哨的邮件";
  postmark = "001";
}

class FancyResume extends Resume {
  content = "花哨的简历";
}

class ModernLetter extends Letter {
  content = "现代的邮件";
  postmark = "002";
}

class ModernResume extends Resume {
  content = "现代的简历";
}

// 文档创建器
abstract class DocumentCreator {
  // 创建信件
  abstract createLetter(): Letter;
  // 创建简历
  abstract createResume(): Resume;
}

class FancyDocumentCreator extends DocumentCreator {
  createLetter(): Letter {
    return new FancyLetter();
  }
  createResume(): Resume {
    return new FancyResume();
  }
}
class ModernDocumentCreator extends DocumentCreator {
  createLetter(): Letter {
    return new ModernLetter();
  }
  createResume(): Resume {
    return new ModernResume();
  }
}

export { FancyDocumentCreator, ModernDocumentCreator };
