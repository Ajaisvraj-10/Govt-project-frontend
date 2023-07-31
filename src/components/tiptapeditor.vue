<template>
   <div>
   <editor-content aria-placeholder="type something here" placeholder="type something here" :editor="editor" />
    <div v-if="editor" class="editor-icons">
      <button class="m-1" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        <i class="fas fa-bold"></i>     
  </button>
      <button class="m-1" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
        <i class="fas fa-italic"></i>      </button>
      <button class="m-1" @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        <i class="fas fa-strikethrough"></i>      </button>
      <button class="m-1" @click="editor.chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
        <i class="fas fa-code"></i>      </button>
      <button class="m-1" @click="editor.chain().focus().unsetAllMarks().run()">
       <i class="fas fa-check"></i>      
  </button>
      <button class="m-1" @click="editor.chain().focus().clearNodes().run()" style="border-right: 1px solid #4e4c4c;
    padding-right: 10px;">
        <i class="fas fa-backspace"></i>
      </button>
     
      <button class="m-1" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        <b>h1</b>
      </button>
      <button class="m-1" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
        <b>h2</b>      </button>
      <button class="m-1" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
        <b>h3</b>      </button>
      <button class="m-1" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
        <b>h4</b>      </button>
      <button class="m-1" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
        <b>h5</b>
      </button>
      <button class="m-1" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
        <b>h6</b>      </button>
 <button class="m-1" @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
        <i class="fas fa-paragraph"></i>
      </button>
      <button class="m-1" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
        <i class="fas fa-list-ul"></i>
      </button>
      <button class="m-1" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
        <i class="fas fa-list-ol"></i>
      </button>
      <button class="m-1" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }" style="border-right: 1px solid #4e4c4c;
    padding-right: 10px;">
        <i class="far fa-file-code"></i>      </button>
      <button class="m-1" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
        <i class="fas fa-quote-right"></i>
      </button>
      <button class="m-1" @click="editor.chain().focus().setHorizontalRule().run()">
        <i class="fas fa-arrows-alt-h"></i>      </button>
      <button class="m-1" @click="editor.chain().focus().setHardBreak().run()" style="border-right: 1px solid #4e4c4c;
    padding-right: 10px;">
        <i class="fas fa-bacon"></i>      </button>
      <button class="m-1" @click="editor.chain().focus().undo().run()">
        <i class="fas fa-undo"></i>
      </button>
      <button class="m-1" @click="editor.chain().focus().redo().run()">
       <i class="fas fa-redo"></i>
      </button>
    </div>
    


  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
  },

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      editor: null,
    }
  },

  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value

      // JSON
      // const isSame = this.editor.getJSON().toString() === value.toString()

      if (isSame) {
        return
      }

      this.editor.commands.setContent(this.value, false)
    },
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
      ],
      content: this.value,
      onUpdate: () => {
        // HTML
        this.$emit('input', this.editor.getHTML())

        // JSON
        // this.$emit('input', this.editor.getJSON())
      },
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
};
</script>

<style lang="scss" scoped>
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }
  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }
}
</style>

<style>
.badge {
        cursor: pointer;
padding: 5px 7px;
}
.ProseMirror {
    border: 2px solid #e8ebee;
    border-radius: 5px;
    margin: 10px 0;
    padding: 5px 20px;
    outline: none;
min-height:70px;

}
.editor-icons{
display: flex;
    justify-content: space-between;

    padding: 7px 0;
    border-radius: 5px;

}
.editor-icons .m-1{
margin:.20rem!important;
font-size: 12px;
}
.editor-icons button.m-1.is-active {
    color: red;
}
</style>